import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-fiche-category',
  templateUrl: './fiche-category.component.html',
  styleUrls: ['./fiche-category.component.css']
})
export class FicheCategoryComponent implements OnInit {
  category;
  tabProcts;
  products;
  id;

  constructor(private cS: CategoryService, private route: ActivatedRoute, private pS: ProductService) { }

  ngOnInit() {
      this.route.paramMap.subscribe((params:ParamMap) => {
        this.id = params.get('id') ? params.get('id') : "5e4e598db07d2c4c1da1e399"
        this.cS.getCategoryById(this.id).subscribe(data => {
          this.category = data;
          this.tabProcts = this.category.products;
        });
      });
    
    
  }

  onChange(deviceValue) {
    
    if(deviceValue === 'alphabetical'){
      
      this.tabProcts.sort(
        function(a, b){
          var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
          if (nameA < nameB)
              return -1 
          if (nameA > nameB)
              return 1
          return 0 
        }
      );
    }else if(deviceValue === 'price'){
      
      this.tabProcts.sort(
        function(a, b){
          return a.price-b.price
        }
      );
    }  
  }

/*   onChange(deviceValue) {
    if(deviceValue === 'alphabetical'){
     // this.sortAlphabetically = true;
     // this.sortPrice = false;
      this.pS.getSortedProducts().subscribe(data => {
        this.products = data; 
      });
    }else if(deviceValue === 'price'){
     // this.sortPrice = true;
     // this.sortAlphabetically = false;
      this.pS.getSortedProductsByPrice().subscribe(data => {
        this.products = data; 
      });
    }
} */

}
