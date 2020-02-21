import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})
export class SingleItemComponent implements OnInit {
  id;
  product;

  constructor(private Ps:ProductService,
              private router:Router,
              private route:ActivatedRoute ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      this.id = params.get('id') ? params.get('id') : "5e4e598db07d2c4c1da1e399"
      this.Ps.getProductById(this.id).subscribe(data => {
        this.product = data; })
  })

}
}
