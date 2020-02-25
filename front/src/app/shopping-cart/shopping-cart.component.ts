import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../classes/cart'
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ShoppingCartComponent implements OnInit {
  myCart:Cart;
  id;
  cart;
  constructor(private scS: ShoppingCartService, private route: ActivatedRoute, private pS: ProductService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') ? params.get('id') : '5e4f9e60e66c951821123cfe'
      this.scS.getCartById(this.id).subscribe(data=>{
        this.myCart = new Cart(data)
        console.log(data)
        this.myCart.calculateTotalPrice()
        
      })
    });
  }
  refreshTotal(){
    this.myCart.calculateTotalPrice();
  };



deleteProductOfCart(product){
  this.scS.deleteProductOfCart(product, this.myCart)
  console.log(this.myCart);

}
}
