import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeelistComponent } from './employeelist.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [


  ],
  imports: [
    CommonModule,
    BrowserModule,RouterModule.forChild([
    {path:'',component:EmployeelistComponent}
    ])

  ]
})
export class EmployeelistModule { }
