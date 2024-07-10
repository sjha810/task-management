import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableColumn, Task } from '../../interface/Task';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrl: './dynamic-table.component.scss'
})
export class DynamicTableComponent {
  @Input() columns: TableColumn[] = [];
  @Input() tasks: Task[] = [];
  @Input() title: string = '';
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() completeTask: EventEmitter<Task> = new EventEmitter();
  @Output() editTaskRow: EventEmitter<Task> = new EventEmitter();


  deleteRow(task: Task) {
    this.deleteTask.emit(task);
  }

  markAsComplete(task: Task) {
    this.completeTask.emit(task);
  }
  editTask(task: Task) {
    this.editTaskRow.emit(task);
  }

}
