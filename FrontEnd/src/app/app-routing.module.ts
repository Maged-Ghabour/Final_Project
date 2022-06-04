import { AddProductComponent } from './pages/add-product/add-product.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AllusersComponent } from './pages/allusers/allusers.component';
import { Error404Component } from './pages/error404/error404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { LogoutComponent } from './pages/logout/logout.component';


const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch: 'full' },
  {path:"home" , component:HomeComponent },
  {path:"login",component:LoginComponent},
  {path:"orders",component:OrdersComponent},
  {path:"shopping",component:ShoppingComponent},
  {path:"singup",component:SignupComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"allusers",component:AllusersComponent},
  {path:"cart",component:CartComponent},
  {path:"logout",component:LogoutComponent},
  {path:"*",component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
