import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }
  
  getCartById(id){
    return this.http.get(apiUrl.shoppingCart+'/'+id);
  }
  calculateTotalPrice(myCart){
    myCart.products.forEach(product => {
      if(product.qte > 1){
        product.price = product.price * product.qte;
      }
    });
    return myCart;
  }
  validateCart(){
    //return this.http.updateOne(apiUrl.cart);
  }
  getCalculateTotal(cart){
    let sommeTotal= 0;
    cart.products.forEach((product)=>{
      sommeTotal += product.price
   })
   return sommeTotal;
  }

}
