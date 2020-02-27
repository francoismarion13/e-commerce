import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';
import { sessionGlobalUser } from './../../environments/environment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products;
  productsHome;
  categorys;
  id;
  SortedProducts;
  sortAlphabetically : boolean=false;
  sortPrice : boolean=false;
  isLogged;

  constructor(private pS: ProductService, private cS: CategoryService) { }

  ngOnInit() {
    //console.log("gere");
    this.pS.getProduct().subscribe(data => {this.products = data; });
    this.pS.getProductHome().subscribe(data => {this.productsHome = data; });
    this.cS.getCategory().subscribe(data => {this.categorys = data; });
    sessionGlobalUser.activeUser === null ? this.isLogged=false : this.isLogged=true;
    console.log(this.isLogged)
  }

  imageIndex(i){
    this.pS.imageIndex = i;
    console.log(this.pS.imageIndex)
  }
}
