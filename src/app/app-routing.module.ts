import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBrandsPageComponent } from './pages/admin-brands-page/admin-brands-page.component';
import { AdminCarsPageComponent } from './pages/admin-cars-page/admin-cars-page.component';
import { AdminColorsPageComponent } from './pages/admin-colors-page/admin-colors-page.component';
import { AdminUsersPageComponent } from './pages/admin-users-page/admin-users-page.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
// import { CategoryComponent } from './components/category/category.component';
// import { LoginComponent } from './components/login/login.component';
// import { ProductAddComponent } from './components/product-add/product-add.component';
// import { ProductComponent } from './components/product/product.component';
// import { LoginGuard } from './guards/login.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:HomePageComponent},
  {path:"cars", component:CarsPageComponent},
  {path:"login", component:LoginPageComponent},
  {path:"register", component:RegisterPageComponent},
  // {path:"products", component:ProductComponent},
  // {path:"products/category/:categoryId", component:ProductComponent},
  // {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]},
  // {path:"login", component:LoginComponent},
  
  //New Area System
  // {path:"demo",redirectTo:'/demo', pathMatch:'full'},
    {
    path: 'admin',
    // component: AdminCarsPageComponent,
    // canActivate: [LoginGuard, AdminGuard],
    children: [
      {
        path: 'carEdit',
        component: AdminCarsPageComponent,
      },
      {
        path: 'brandEdit',
        component: AdminBrandsPageComponent,
      },
      {
        path: 'colorEdit',
        component: AdminColorsPageComponent,
      },
      {
        path: 'userEdit',
        component: AdminUsersPageComponent,
      },
    ]
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
