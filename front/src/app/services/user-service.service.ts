import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { sessionGlobal } from './../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  userLogged

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
    };
    return this.http.post(apiUrl.users+'/', user, httpOptions)
  }

  updateUser(user){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.put(apiUrl.users + '/' + user._id, user, httpOptions);
  }

  loginUser(u, p){
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let authentification = { username: u, password: p }
    return this.http.post(apiUrl.users+'/login', authentification, httpOptions)
  }

  logoutUser(user){
    sessionGlobal.activeUser = null;
    this.userLogged = null;
  }
}
