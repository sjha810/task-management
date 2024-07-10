import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'add-task', component: AddTaskComponent },
  { path: 'add-task/:id', component: AddTaskComponent }, // Dynamic route with optional id
  { path: 'task-list', component: TaskListComponent },
  { path: '', redirectTo: '/add-task', pathMatch: 'full' },
  { path: '**', redirectTo: '/add-task', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
