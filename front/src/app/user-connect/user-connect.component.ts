import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { sessionGlobal } from './../../environments/environment';
import { Router } from '@angular/router';

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

  constructor(private uS: UserServiceService, private routes: Router) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }
  onLogin(e){
    e.preventDefault();
    this.uS.loginUser(this.username, this.password).subscribe(data => {
      sessionGlobal.activeUser = data;
      this.loggedUser = data;
      this.routes.navigate(['/userProfile/'+(sessionGlobal.activeUser)._id]);
    })
  }
}
