import { Injectable } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { apiUrl } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private Product:Product, private http: HttpClient) { }

  getProduct(){
    return this.http.get(apiUrl.products);
  }

  getProductHome(){
    return this.http.get(apiUrl.home);
  }
}
