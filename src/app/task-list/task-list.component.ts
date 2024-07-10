import { Component } from '@angular/core';
import { TableColumn, Task } from '../interface/Task';
import { StoreService } from '../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  columns: TableColumn[] = [
    {
      key: 'id',
      label: 'ID'
    },
    {
      key: 'title',
      label: 'Title'
    },
    {
      key: 'desc',
      label: 'Description'
    },
    {
      key: 'actions',
      label: 'Actions'
    },
  ];
  tasks: Task[] = []

  constructor(private store: StoreService, private router: Router) {
    this.tasks = this.store.getTask();
  }

  /**
 * Deletes a task from the local storage and the tasks array.
 * @param {Task} task - The task to be deleted.
 */
  deleteTaskRow(task: Task): void {
    this.store.deleteTask(task.id);
    this.tasks = this.store.getTask();
  }


  /**
  * Marks a task as completed and updates it in the local storage.
  * @param {Task} task - The task to be marked as completed.
  */
  makeTaskComplete(task: Task): void {
    task.completed = true;
    this.store.updateTask(task);
    this.tasks = this.store.getTask();
  }


  editTask(task: Task){
this.router.navigate(['/add-task', task.id])
  }
}
