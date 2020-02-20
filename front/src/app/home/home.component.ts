import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products;
  productsHome;

  constructor(private pS: ProductService) { }

  ngOnInit() {
    console.log("gere");
    this.pS.getProduct().subscribe(data => {this.products = data; });
    
    this.pS.getProductHome().subscribe(data => {this.productsHome = data; });

  }

}