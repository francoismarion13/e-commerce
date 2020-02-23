import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FicheCategoryComponent } from './fiche-category/fiche-category.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

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
  { path: 'userCreate', component: UserCreateComponent }
  // { path: 'edit', component: UserEditComponent},
  // { path: 'delete', component: UserDeleteComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }