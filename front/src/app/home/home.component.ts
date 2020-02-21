import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';

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

  constructor(private pS: ProductService, private cS: CategoryService) { }

  ngOnInit() {
    console.log("gere");
    this.pS.getProduct().subscribe(data => {this.products = data; });
    
    this.pS.getProductHome().subscribe(data => {this.productsHome = data; });

    this.cS.getCategory().subscribe(data => {this.categorys = data; });

  }

}
