import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  templateUrl: './admin-auth.component.html',
  styleUrls: ['./admin-auth.component.css']
})
export class AdminAuthComponent implements OnInit {
  loggedAdmin;
  username;
  password;
  userId;
  isAuthAdmin: Boolean = false;

  constructor(private aS: AdminService, private routes: Router) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  login(e) {
    e.preventDefault();
    this.aS.getAdmins().subscribe((data : any[]) => {
      console.log(data);
      data.forEach((u) => {
        if (u.username === this.username) {
          if (u.password === this.password) {
            this.aS.isAuthAdmin = true;
          }
        } else {
          console.log('username or password incorrect');
        }
        if (this.aS.isAuthAdmin) {
          this.routes.navigate(['/admin/adminHome']);
        }

      });
    });


  }



}
