import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { sessionGlobalUser } from './../../environments/environment';
import { sessionGlobalCart } from './../../environments/environment';
import { Router } from '@angular/router';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-user-connect',
  templateUrl: './user-connect.component.html',
  styleUrls: ['./user-connect.component.css']
})

export class UserConnectComponent implements OnInit {
  loggedUser;
  username;
  password;
  userId;
  //isLogged: boolean;

  constructor(private uS: UserServiceService, private scS: ShoppingCartService, private routes: Router) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }
  onLogin(e){
    e.preventDefault();
    this.uS.loginUser(this.username, this.password).subscribe(data => {
      sessionGlobalUser.activeUser = data;
      this.loggedUser = data;

      this.sC.getCartByIdUser(this.loggedUser._id).subscribe(data => {
        sessionGlobalCart.activeCart = data;
      })
      this.loggedUser != null ? this.uS.isLogged = true : this.uS.isLogged = false;

      this.routes.navigate(['/userProfile/'+(sessionGlobalUser.activeUser)._id]);
    })
  }
}
