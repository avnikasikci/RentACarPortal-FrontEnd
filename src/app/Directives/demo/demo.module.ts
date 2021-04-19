// import { NgModule } from '@angular/core';

// // import { CommonModule } from '@angular/common';
// import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule, ReactiveFormsModule} from "@angular/forms"
// import { HomeComponent } from './components/home/home.components';
// // import { VatAddedPipe } from 'src/app/pipes/vat-added.pipe';
// // import { FilterPipePipe } from 'src/app/pipes/filter-pipe.pipe';
// import { CartSummaryComponent } from 'src/app/directives/demo/components/cart-summary/cart-summary.component';
// import { ProductComponent } from './components/product/product.component';
// import { CategoryComponent } from './components/category/category.component';
// import { NaviComponent } from './components/navi/navi.component';
// import { TodoComponent } from './components/todo/todo.component';
// import { ProductAddComponent } from './components/product-add/product-add.component';
// import { LoginComponent } from './components/login/login.component';
// import { DemoComponent } from './demo.component';




// @NgModule({
//   declarations: [
//     DemoComponent,
//     HomeComponent,
//     ProductComponent,
//     CategoryComponent,
//     NaviComponent,
//     TodoComponent,
//     // VatAddedPipe,
//     // FilterPipePipe,
//     CartSummaryComponent,
//     ProductAddComponent,
//     LoginComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     ReactiveFormsModule,
//   ],
//   providers: [ ],
//   bootstrap: [DemoComponent]
// })
// export class DemoModule { }



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { HomeComponent } from './components/home/home.components';
import { DemoRouting } from './demo.routing';
import { DemoComponent } from './demo.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { TodoComponent } from './components/todo/todo.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    DemoComponent,
    HomeComponent,
        DemoComponent,
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    TodoComponent,
    // VatAddedPipe,
    // FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRouting
  ],
  providers: [ ],
  bootstrap: [DemoComponent]
})
export class DemoModule { }

