import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationModule } from './registration/registration.module';
import { EmployeelistModule } from './employeelist/employeelist.module';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    EmployeelistModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
