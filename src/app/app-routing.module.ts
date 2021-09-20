import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddorderComponent } from './addorder/addorder.component';
import { AddressComponent } from './address/address.component';
import { CountryComponent } from './country/country.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerregisterComponent } from './customerregister/customerregister.component';
import { LoginComponent } from './login/login.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { StaffdashboardComponent } from './staffdashboard/staffdashboard.component';
import { StateComponent } from './state/state.component';
const routes: Routes = [
  {
    path:'staffdashboard',
    component: StaffdashboardComponent
  },
  
  {
    path:'product',
    component:ProductComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component: LoginComponent
  },

  {
    path:'order',
    component: OrderComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'address',
    component:AddressComponent
  },
  {
    path:'country',
    component:CountryComponent
  },
 
  {
    path:'state',
    component:StateComponent
  },
  {
    path:'addorder',
    component:AddorderComponent
  },
 
  {
    path:'addcustomer',
    component:CustomerregisterComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
