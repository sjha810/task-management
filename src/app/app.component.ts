import { Component } from '@angular/core';
import { RoutesLink } from './interface/RoutesLink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'task-management';
  routes: RoutesLink[] = [
    {
      name: 'Add Task',
      path: '/add-task'
    },
    {
      name: 'Task List',
      path: '/task-list'
    }
  ]
}
