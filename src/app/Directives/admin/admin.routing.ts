import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { BrandsPageComponent } from './pages/brands-page/brands-page.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { ColorsPageComponent } from './pages/colors-page/colors-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  //New Area System
  {path:"admindemo",component:AdminComponent,children:
  [
    {path:'',component:AdminComponent},
    {path:'cars',component:CarsPageComponent},
    {path:'users',component:UsersPageComponent},
    {path:'brands',component:BrandsPageComponent},
    {path:'colors',component:ColorsPageComponent},

  ]}
];

export const AdminRouting = RouterModule.forRoot(routes);