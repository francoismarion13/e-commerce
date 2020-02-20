import { Injectable } from '@angular/core';
import { Product } from '../classes/produit';
import { apiUrl } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private Product:Product) { }
}
