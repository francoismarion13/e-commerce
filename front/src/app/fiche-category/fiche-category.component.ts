import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';
import {FormsModule} from '@angular/forms';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-fiche-category',
  templateUrl: './fiche-category.component.html',
  styleUrls: ['./fiche-category.component.css']
})
export class FicheCategoryComponent implements OnInit {
  category;
  tabProcts;
  products;
  radioValue;
  radioValuePrice;
  productsL;
  id;
 prods : String[];
 tabProctssort;
 
 affichage : String[];
 affichageSize : String[];
 affichagePrice : String[];
 prodsPrice: String[];
 arrayNotEmpty : Boolean = false;

  constructor(private cS: CategoryService, private route: ActivatedRoute, private pS: ProductService, private scS: ShoppingCartService) {
    this.tabProctssort = new Array();
   

    this.route.paramMap.subscribe((params:ParamMap) => {
      this.pS.getProduct().subscribe(data => {this.productsL = data; });
      this.id = params.get('id') ? params.get('id') : "5e4e598db07d2c4c1da1e399"
      this.cS.getCategoryById(this.id).subscribe(data => {
        this.category = data;
        this.tabProcts = this.category.products;
        this.tabProctssort = this.category.products;
        this.affichage = this.tabProcts;
        console.log(this.category.products.images);
       /*  this.intialise("plagePrix");
        this.intialise("taille");
        this.intialise("sort"); */
      });
    });
   }

  ngOnInit() {
    this.intialise('sort');
  }

  onChange(deviceValue) {
    /* this.intialise("plagePrix");
    this.intialise("taille"); */
    this.affichage = [];
    
    if(deviceValue === 'alphabetical'){
      
      this.tabProctssort.sort(
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
      
      this.tabProctssort.sort(
        function(a, b){
          return a.price-b.price
        }
      );
    }  
    this.affichage = this.tabProctssort;
    console.log(this.tabProctssort)
    
    return this.affichage;
  }


  /*########### Template Driven Form ###########*/



  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.affichage = pageOfItems;
  }

  radioChangeHandler(evt){
    //console.log(evt.target.value)
    this.radioValue = evt.target.value
    this.prods = new Array();
      this.affichageSize = [];

      /* if(this.affichagePrice.length > 0 ) {
        this.tabProcts = [];
        this.tabProcts = this.affichagePrice;
      } */
    
      this.tabProcts.forEach((u)=>{
        if(u.size === this.radioValue){
          this.prods.push(u);
        }
      })
      if(this.prods.length>0){
        this.arrayNotEmpty = true;
      }
      this.affichage = this.prods;
      this.affichageSize = this.prods;
      return this.affichage;
  }

  radioChangeHandlerPrice(evt){
    this.radioValuePrice = evt.target.value

    this.prodsPrice = new Array();
    this.prodsPrice = [];
    /* if(this.affichage.length > 0 ) {
      this.affichage = [];
    } */
    
    if(this.affichageSize.length > 0 ) {
      this.tabProcts = [];
      this.tabProcts = this.affichageSize;
    }
  
    this.tabProcts.forEach((u)=>{
      if(this.radioValuePrice == '100'){
          if(parseInt(u.price) < 100){
            this.prodsPrice.push(u);
          }
      }else if(this.radioValuePrice == '200'){
        if( parseInt(u.price) >= 100 && parseInt(u.price) < 200){
          this.prodsPrice.push(u);
        }
      }else if(this.radioValuePrice == '300'){
        if( parseInt(u.price) >= 200 && parseInt(u.price) <= 300){
          this.prodsPrice.push(u);
        }
      }
        
      })
    if(this.prodsPrice.length>0){
      this.arrayNotEmpty = true;
    }
    this.affichage = this.prodsPrice;
    this.affichagePrice = this.prodsPrice;
    this.tabProcts = this.category.products;
    
    return this.affichage;
  }


   intialise(index="") {
    let select = document.getElementById(index)  as HTMLSelectElement 
    if(select.selectedIndex != 0){
      select.selectedIndex = 0;
    }
  }

  imageIndex(i){
    this.pS.imageIndex = i;
    console.log(this.pS.imageIndex)
  }
 
  addToCart(Product){
    this.scS.addProductToCart(Product);
  }
}
