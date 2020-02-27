import { Component, OnInit } from '@angular/core';
import { PrincipaleService } from '../adminServices/principale.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  status: string = 'status';
  id;
  product;

  constructor(private principale: PrincipaleService, 
              private route: ActivatedRoute, 
              private Ps:ProductService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.Ps.getProductById(this.id).subscribe(data => {
      this.product = data; 
    });
  }

}
