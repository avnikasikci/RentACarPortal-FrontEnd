import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.components';
import { HomeComponent } from './components/home/home.components';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  //New Area System
  {path:"admin",component:AdminComponent,children:
  [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'AboutUs',component:AboutUsComponent},
  ]}
];

export const UserRouting = RouterModule.forRoot(routes);