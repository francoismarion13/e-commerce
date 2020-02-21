import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleItemComponent } from './single-item/single-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FicheCategoryComponent } from './fiche-category/fiche-category.component';

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
  ]}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }