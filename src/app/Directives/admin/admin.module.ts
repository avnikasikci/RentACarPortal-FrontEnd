import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.components';
import { UserRouting } from './admin.routing';



@NgModule({
  declarations: [
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserRouting
  ],
  providers: [ ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
