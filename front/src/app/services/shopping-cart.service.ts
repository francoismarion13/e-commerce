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
  validateCart(){
    //return this.http.updateOne(apiUrl.cart);
  }
  deleteProductOfCart(product, cart){
    return this.http.delete(apiUrl.shoppingCart + '/' + cart._id + '/product/' + product._id).subscribe();
  }
  
}
