import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../classes/cart'
import { ProductService } from '../services/product.service';
import { sessionGlobalUser } from './../../environments/environment'
import { sessionGlobalCart } from './../../environments/environment'

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ShoppingCartComponent implements OnInit {

  myCart: Cart;
  id;
  cart;
  isLogged: boolean;

  constructor(private scS: ShoppingCartService, private route: ActivatedRoute, private pS: ProductService) { }

  ngOnInit() {
    if(sessionGlobalUser.activeUser == null){
      this.isLogged = false;
    }else{
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id')
        
        this.scS.getCartById(this.id).subscribe(data => {
          this.myCart = new Cart(data)
          this.myCart.calculateTotalPrice()
        })
      });
    }
    console.log(this.myCart)
  }

  refreshTotal() {
    //this.scS.majQteInBase(cartId, product, qte);
    this.myCart.calculateTotalPrice();
  };

  deleteProductOfCart(product) {
    this.scS.deleteProductOfCart(product, this.myCart).subscribe(
      data => {
        this.myCart = new Cart(data)
        console.log(this.myCart);
      }
    )
  }
  onsubmit(){
    console.log("panier validé")
  }
  
}
