import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  http: any;

  constructor() { }

  loginAdmin(u, p){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let authentification = { username: u, password: p }
    return this.http.post(apiUrl.admins+'/login', authentification, httpOptions)
  }
}
