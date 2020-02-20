import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }
  
  getCart(){
    return this.http.get(apiUrl.cart);
  }
  validateCart(){
    //return this.http.updateOne(apiUrl.cart);
  }
}
