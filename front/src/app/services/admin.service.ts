import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apiUrlAdmin } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { 
  }

  getAdmins(){
    return this.http.get(apiUrlAdmin.home);
  }

  getUserById(id){
    return this.http.get(apiUrlAdmin.home+'/'+id);
  }

  loginAdmin(u, p){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let authentification = { username: u, password: p }
    return this.http.post(apiUrlAdmin+'/login', authentification, httpOptions)
  }
}
