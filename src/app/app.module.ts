import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from "ngx-toastr";
// import { CartSummaryComponent } from './directives/demoV1/components/cart-summary/cart-summary.component';

import { AuthInterceptor } from './interceptors/auth.interceptor';
import { UserModule } from './directives/user/user.module';
import { AdminModule } from './directives/admin/admin.module';
import { DemoModule } from './directives/demo/demo.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CarsPageComponent } from './pages/cars-page/cars-page.component';
import { NavbarTopComponent } from './components/navbar-top/navbar-top.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarChildComponent } from './components/navbar-child/navbar-child.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { AdminCarsPageComponent } from './pages/admin-cars-page/admin-cars-page.component';
import { AdminColorsPageComponent } from './pages/admin-colors-page/admin-colors-page.component';
import { AdminUsersPageComponent } from './pages/admin-users-page/admin-users-page.component';
import { CarPipe } from './pipes/car.pipe';


@NgModule({
  declarations: [
    AppComponent,
    VatAddedPipe,
    FilterPipePipe,
    HomePageComponent,
    LoginPageComponent,
    CarsPageComponent,
    NavbarTopComponent,
    FooterComponent,
    NavbarChildComponent,
    CarCardComponent,
    RegisterPageComponent,   
    NavbarAdminComponent,   
    AdminCarsPageComponent,
    AdminColorsPageComponent,
    AdminUsersPageComponent,
    CarPipe,
    // CartSummaryComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    DemoModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
