import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.components';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  //New Area System
  {path:"demo",component:DemoComponent,children:
  [
    {path:"",component:HomeComponent},
    {path:"products",component:ProductComponent},
    // {path:"products", component:ProductComponent},
    {path:"products/category/:categoryId", component:ProductComponent},
    // {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]},
    {path:"login", component:LoginComponent},

  ]}
];

export const DemoRouting = RouterModule.forRoot(routes);
