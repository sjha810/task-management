import { Component, OnInit } from '@angular/core';
import { Task } from '../interface/Task';
import { StoreService } from '../services/store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent implements OnInit {
  showError: string = ''
  isTaskSubmitted: string = ''
  task: Task = {
    title: '',
    desc: '',
    id: '',
    completed: false
  }
  isEditing: boolean = false;
  constructor(private store: StoreService, private acRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.acRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditing = true;
        const tasks = this.store.getTask();
        this.task = tasks.find((t: Task) => t.id === id) || this.task;
      }
    });
  }

  addTask(): void {
    const validationError = this.validateTask(this.task);
    if (validationError) {
      this.showError = validationError;
    } else {
      this.saveTask();
      this.resetTaskForm();
    }

    this.clearMessagesAfterTimeout();
  }

  /**
   * Validates the task.
   * @param {Task} task - The task to be validated.
   * @returns {string | null} - The validation error message, or null if the task is valid.
   */
  private validateTask(task: Task): string | null {
    if (!task.title) {
      return 'Title should not be empty';
    }
    if (!task.desc) {
      return 'Description should not be empty';
    }
    return null;
  }

  /**
   * Saves the task. If editing, updates the existing task, otherwise creates a new task.
   */
  private saveTask(): void {
    if (this.isEditing) {
      this.store.updateTask(this.task);
      this.router.navigate([ '/task-list' ]);
      this.isTaskSubmitted = 'Task Updated Successfully'
    } else {
      this.task.id = this.generateRandomId();
      this.store.createTask(this.task);
      this.isTaskSubmitted = 'Task Submitted Successfully';
    }
  }

  /**
   * Resets the task form to its initial state.
   */
  private resetTaskForm(): void {
    this.task = { id: '', title: '', desc: '', completed: false };
  }

  /**
   * Clears error and success messages after a timeout.
   */
  private clearMessagesAfterTimeout(): void {
    setTimeout(() => {
      this.showError = '';
      this.isTaskSubmitted = '';
    }, 3000);
  }

  /**
   * Generates a random ID for a new task.
   * @returns {string} - A random ID as a string.
   */
  private generateRandomId(): string {
    return Math.floor(Math.random() * 100000).toString();
  }
}
