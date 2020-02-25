import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListeProductService {

  constructor(private http: HttpClient) { }

  getListProduct(){
    return this.http.get(apiUrl.products);
  }
}
