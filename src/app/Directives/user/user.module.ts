import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { UserComponent } from './user.component';
import { HomeComponent } from './components/home/home.components';
import { UserRouting } from './user.routing';



@NgModule({
  declarations: [
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    UserRouting
  ],
  providers: [ ],
  bootstrap: [UserComponent]
})
export class UserModule { }
