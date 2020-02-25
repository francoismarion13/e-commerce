import { Component, OnInit } from '@angular/core';
import { ListeProductService } from '../adminServices/liste-product.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css' ]
})
export class ListProductComponent implements OnInit {
  products;

  constructor(private lpS: ListeProductService) { }

  ngOnInit() {
    this.lpS.getListProduct().subscribe((data) =>{
        this.products = data;
    });
  }

}
