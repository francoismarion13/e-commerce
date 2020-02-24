import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { activeUser } from './../../environments/environment'

@Component({
  selector: 'app-user-connect',
  templateUrl: './user-connect.component.html',
  styleUrls: ['./user-connect.component.css']
})
export class UserConnectComponent implements OnInit {
  loggedUser: Object
  username;
  password;
  userId;

  constructor(private uS: UserServiceService) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }
  onLogin(e){
    e.preventDefault();
    this.uS.loginUser(this.username, this.password).subscribe(data => {
      this.loggedUser = data;
      //activeUser = this.loggedUser;
    })
    console.log(activeUser);
  }
}
