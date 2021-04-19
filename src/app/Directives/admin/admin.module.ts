import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { AdminComponent } from './admin.component';
import { AdminRouting } from './admin.routing';
import { CarComponent } from './components/car/car.components';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { ColorsPageComponent } from './pages/colors-page/colors-page.component';
import { BrandsPageComponent } from './pages/brands-page/brands-page.component';
import { NavbarTopAdminComponent } from './components/navbar-top-admin/navbar-top-admin.component';



@NgModule({
  declarations: [
    AdminComponent,
    CarComponent,
    CarsPageComponent,
    UsersPageComponent,
    ColorsPageComponent,
    BrandsPageComponent,

    NavbarTopAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRouting
  ],
  providers: [ ],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
