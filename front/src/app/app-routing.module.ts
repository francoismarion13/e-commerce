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
      { path: '', component: UserProfileComponent },
      { path: ':id', component: UserProfileComponent }
    ]
  },
  {
    path: 'admin',
    children: [
      { path: '', component: AdminAuthComponent },
      { path: 'adminHome', component: AdminHomeComponent },
      { path: 'listProduct', component: ListProductComponent },
      { path: 'adminProduct/:id', component: AdminProductComponent }
    ]
  },
  { path: 'userCreate', component: UserCreateComponent },
  { path: 'userConnect', component: UserConnectComponent},
  { path: 'payments', component: PaymentsComponent }

  // { path: 'edit', component: UserEditComponent},
  // { path: 'delete', component: UserDeleteComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }