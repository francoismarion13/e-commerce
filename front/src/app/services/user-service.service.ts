import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../classes/customer';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) {
    this.getUsers();
  }
  
  getUsers(){
    return this.http.get(apiUrl.users);
  }
  getUserById(id){
    return this.http.get(apiUrl.users+'/'+id);
  }
  createUSer(user){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }
    return this.http.post<Customer>(apiUrl.users, user, httpOptions)
  }
}
