import { Task } from './../interface/Task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  constructor() { }

  /**
   * Retrieves the list of tasks from localStorage.
   *
   * @returns {Array<Object>} The array of tasks, or an empty array if no tasks are found.
   */
  getTask() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }

  /**
   * Creates a new task and adds it to localStorage.
   *
   * @param {Object} newTask - The new task to add.
   */
  createTask(newTask: Task) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /**
  * Sets the tasks array in local storage.
  * @param {Task[]} tasks - The array of tasks to be stored in local storage.
  */
  setTask(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }


  /**
    * Updates a task in the local storage.
    * @param {Task} updatedTask - The task with updated information.
    */
  updateTask(updatedTask: Task): void {
    let tasks = this.getTask();
    tasks = tasks.map((task: Task) => task.id === updatedTask.id ? updatedTask : task);
    this.setTask(tasks);
  }

  /**
   * Deletes a task from localStorage based on its id.
   *
   * @param {number} id - The unique identifier for the task to be deleted.
   */
  deleteTask(id: string) {
    let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = tasks.filter((task: Task) => task.id !== id);
    this.setTask(tasks);
  }

}
