import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([
      {path:'',component:SearchComponent}
    ])

  ]
})
export class SearchModule { }
