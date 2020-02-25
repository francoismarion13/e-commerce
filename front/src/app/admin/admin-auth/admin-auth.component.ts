import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { sessionGlobalAdmin } from 'src/environments/environment';

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

  constructor( private aS: AdminService, private routes: Router) { }

  ngOnInit() {
    this.username = '';
    this.password = '';
  }

  login(e){
    e.preventDefault();
    this.aS.getAdmins().subscribe(data => {
      data.forEach((u)=>{
        
         if(u.username === this.username){
            if(u.password === this.password){
              this.routes.navigate(['/admin/adminHome']);
            } 
        } else{
          console.log('username or password incorrect');
        }
      })

      //console.log(data[0].lastname) ;
     // sessionGlobal.activeAdmin = data;
    });
  }

  

}
