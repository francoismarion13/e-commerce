import { Product } from './classes/produit';
import { Category } from './classes/category';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    Product,
    Category
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
