import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';



const appRoutes:Routes = [
  {path:'',component: RegisterComponent},
  { path:'register',component:RegisterComponent},
  {path:'product-list' ,component:ProductListComponent}
]

@NgModule({
  imports:[ RouterModule.forRoot(appRoutes)],
exports:[RouterModule],
  declarations: [ ],
  bootstrap:    [ ]
})
export class AppRoutingModule { }
