import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { sessionGlobal } from 'src/environments/environment';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  loggedUser;
  username;
  password;
  userId;

  constructor( private aS: AdminService, private routes: Router) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  onLogin(e){
    e.preventDefault();
    this.aS.loginAdmin(this.username, this.password).subscribe(data => {
      //this.loggedUser = data;
      this.loggedUser = data;
      sessionGlobal.activeUser = data;
    })
    console.log()
    this.routes.navigate(['/']);
  }

}
