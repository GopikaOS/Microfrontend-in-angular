import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeelistComponent } from '../employeelist/employeelist.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EventsComponent } from '../events/events.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    EventsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'',component:RegistrationComponent}
    ])
  ]
})
export class RegistrationModule { }
