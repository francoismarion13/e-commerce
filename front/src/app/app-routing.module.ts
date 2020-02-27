import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FicheCategoryComponent } from './fiche-category/fiche-category.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserConnectComponent } from './user-connect/user-connect.component';
import { PaymentsComponent } from './payments/payments.component';
import { AdminAuthComponent } from './admin/admin-auth/admin-auth.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { ListProductComponent } from './admin/list-product/list-product.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { AdminAuthGuard } from './services/guards/admin-auth.guard';
import { UserAuthGuard } from './services/guards/user-auth.guard';
import { AcceptedComponent } from './accepted/accepted.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'category',
    children: [
      { path: '', component: FicheCategoryComponent },
      {path: ':id', component: FicheCategoryComponent},
    ]
  },
  {
    path: 'product',
    children: [
      { path: '', component: HomeComponent },
      {path: ':id', component: SingleItemComponent}
      
    ]
  },
  { path: 'shoppingCart', 
    children: [
      { path: '',  component: ShoppingCartComponent },
      { path: ':id', component: ShoppingCartComponent }
    ]
  },
  { path: 'userProfile',
    children: [
      { path: '', canActivate:[UserAuthGuard], component: UserProfileComponent },
      { path: ':id', canActivate:[UserAuthGuard], component: UserProfileComponent }
    ]
  },
  { path: 'userCreate', component: UserCreateComponent },
  { path: 'userConnect', component: UserConnectComponent},
  {
    path: 'admin',
    children: [
      { path: '', component: AdminAuthComponent },
      { path: 'adminHome', canActivate:[AdminAuthGuard], component: AdminHomeComponent },
      { path: 'listProduct', canActivate:[AdminAuthGuard],  component: ListProductComponent },
      { path: 'adminProduct/:id', canActivate:[AdminAuthGuard],  component: AdminProductComponent }
    ]
  },
  { path: 'payments',
  children: [
    { path: '', component: PaymentsComponent },
    { path: 'accepted', component: AcceptedComponent }
  ]
},

  
  { path: 'not-found' , component: FourOFourComponent },
  { path: '**' , redirectTo: 'not-found'}

  // { path: 'edit', component: UserEditComponent},
  // { path: 'delete', component: UserDeleteComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }