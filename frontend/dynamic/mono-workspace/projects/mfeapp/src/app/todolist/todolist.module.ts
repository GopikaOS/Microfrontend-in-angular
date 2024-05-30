import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TodolistComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {path:'',component:TodolistComponent}
    ])
  ]
})
export class TodolistModule { }
