import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import {FormsModule} from '@angular/forms';

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
 prods : String[];
 affichage : String[];
 prodsPrice: String[];
 arrayNotEmpty : Boolean = false;

  constructor(private cS: CategoryService, private route: ActivatedRoute, private pS: ProductService) {

    this.route.paramMap.subscribe((params:ParamMap) => {
      this.id = params.get('id') ? params.get('id') : "5e4e598db07d2c4c1da1e399"
      this.cS.getCategoryById(this.id).subscribe(data => {
        this.category = data;
        this.tabProcts = this.category.products;
        this.affichage = this.tabProcts;
      });
    });
   }

  ngOnInit() {
    
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


  /*########### Template Driven Form ###########*/

  selectWithSizeForm(deviceValue) {
      this.prods = new Array();
    
      this.tabProcts.forEach((u)=>{
        if(u.size === deviceValue){
          this.prods.push(u);
        }
      })
      if(this.prods.length>0){
        this.arrayNotEmpty = true;
      }
      this.affichage = this.prods;
      return this.affichage;

  }

  selectWithPriceForm(deviceValue) {
    this.prodsPrice = new Array();
    this.prodsPrice = [];
    
  
    this.tabProcts.forEach((u)=>{
      if(deviceValue == '100'){
          if(parseInt(u.price) < 100){
            this.prodsPrice.push(u);
          }
      }else if(deviceValue == '200'){
        if( parseInt(u.price) >= 100 && parseInt(u.price) < 200){
          this.prodsPrice.push(u);
        }
      }else if(deviceValue == '300'){
        if( parseInt(u.price) >= 200 && parseInt(u.price) <= 300){
          this.prodsPrice.push(u);
        }
      }
        
      })
    if(this.prodsPrice.length>0){
      this.arrayNotEmpty = true;
    }
    this.affichage = this.prodsPrice;
    return this.affichage;

  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.affichage = pageOfItems;
  }

}
