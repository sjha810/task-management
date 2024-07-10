import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ShowAlertComponent } from './show-alert/show-alert.component';

const components = [
  DynamicTableComponent, HeaderComponent, ShowAlertComponent
]

@NgModule({
  declarations: [ components, ShowAlertComponent ],
  imports: [
    CommonModule, RouterModule,AlertModule
  ],
  exports: [ components ]
})
export class SharedModule { }
