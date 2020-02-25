import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }
  
  getCartById(id){
    console.log(id)
    return this.http.get(apiUrl.shoppingCart+'/'+id);
  }
  validateCart(){
    //return this.http.updateOne(apiUrl.cart);
  }
  deleteProductOfCart(product, cart){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    var newcart = this.http.put(apiUrl.shoppingCart + '/' + cart._id, product);
    console.log(newcart)
    return newcart
  }
}
