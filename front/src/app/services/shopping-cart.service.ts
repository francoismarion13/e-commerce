import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sessionGlobalCart } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ShoppingCartService {

  constructor(private http: HttpClient) { }
  
  getCartById(id){
    return this.http.get(apiUrl.shoppingCart+'/'+id);
  }

  getCartByIdUser(idUser){
    return this.http.get(apiUrl.shoppingCart+'/userCart/'+idUser);
  }

  validateCart(){
    //return this.http.updateOne(apiUrl.cart);
  }

  deleteProductOfCart(product, cart){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    var newcart = this.http.put(apiUrl.shoppingCart + '/' + cart._id, product);
    return newcart
  }

  addProductToCart(myProduct){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    let newProduct = {
      name: myProduct.name,
      price: myProduct.price,
      qte: 1,
      img: myProduct.img,
      _id: myProduct._id
    }
    
    this.http.post(apiUrl.shoppingCart + '/' + sessionGlobalCart.activeCart._id, newProduct, 
      httpOptions).subscribe();
  }

  majQteInBase(cartId, product, qte){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    let myProduct = {
      id: product._id,
      qte: qte
    }

    this.http.post(apiUrl.shoppingCart + '/qte/' + cartId, myProduct, httpOptions).subscribe();
  }
}
