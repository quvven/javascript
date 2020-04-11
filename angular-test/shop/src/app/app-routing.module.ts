import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductAdd1Component } from './product/product-add1/product-add1.component';
import { ProductAdd2Component } from './product/product-add2/product-add2.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';


const routes: Routes = [
  {path:"products", component:ProductComponent},
  {path:"product-add1", component:ProductAdd1Component, canActivate:[LoginGuard]},
  {path:"product-add2", component:ProductAdd2Component},
  {path:"", redirectTo:"products", pathMatch:'full'},
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"login", component:LoginComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
