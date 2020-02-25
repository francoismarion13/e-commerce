import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { sessionGlobal } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user;
  id;

  constructor(private uS: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.uS.getUserById(this.id).subscribe(data=>{
        this.user = data;
      })
    });
  }

  onUpdate(e){
    e.preventDefault();
    this.uS.updateUser(this.user).subscribe( data => {
      sessionGlobal.activeUser = data;
    });
  }
}
