import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { sessionGlobalUser } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user;
  id;
  newAdress = {
    adresse1: String,
    adresse2: String,
    codePostal: String,
    ville: String
  }
  newCard = {
    cardNumber: Number,
    cardUserName: String,
    cardDate: String,
    cardSecretVerif: String
  }
  adresseToDelete = {
    adresse1: String,
    adresse2: String,
    codePostal: String,
    ville: String
  }
  cardToDelete = {
    cardNumber: Number,
    cardUserName: String,
    cardDate: String,
    cardSecretVerif: String
  }
  suppAdOK: boolean;
  suppCardOK: boolean;
  updateOK: boolean;

  constructor(private uS: UserServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.uS.getUserById(this.id).subscribe(data=>{
        this.user = data;
      })
    });
    this.suppAdOK = true;
    this.suppCardOK = true;
    this.updateOK = false;
  }

  onUpdate(){
    //e.preventDefault();
    this.uS.updateUser(this.user).subscribe( data => {
      sessionGlobalUser.activeUser = data;
      this.router.navigate(['/userProfile/'+sessionGlobalUser.activeUser._id]);
      this.updateOK = true;
    });
  }

  addAdress(){
    if(this.newAdress != null){
      sessionGlobalUser.activeUser.adresses.push(this.newAdress);
      this.user = sessionGlobalUser.activeUser;
      this.onUpdate();
      this.newAdress = null;
    }
  }
  
  delAdress(adresse){
    let temp;
    if(sessionGlobalUser.activeUser.adresses.length == 1){
      this.suppAdOK = false;
    }else{
      for(let i = 0; i <= sessionGlobalUser.activeUser.adresses.length-1; i++ ){
        if(sessionGlobalUser.activeUser.adresses[i]._id == adresse._id) temp = i;
      }
      sessionGlobalUser.activeUser.adresses.splice(temp);
      this.user = sessionGlobalUser.activeUser;
      this.onUpdate();
    }
  }

  addCard(){
    if(this.newCard != null){
      sessionGlobalUser.activeUser.cards.push(this.newCard);
      this.user = sessionGlobalUser.activeUser;
      this.onUpdate();
      this.newCard = null;
    }
  }
  
  delCard(card){
    let temp;
    if(sessionGlobalUser.activeUser.cards.length == 1){
      this.suppCardOK = false;
    }else{
      for(let i = 0; i <= sessionGlobalUser.activeUser.cards.length -1; i++ ){
        if(sessionGlobalUser.activeUser.cards[i]._id == card._id) temp = i;
      }
      sessionGlobalUser.activeUser.cards.splice(temp);
      this.user = sessionGlobalUser.activeUser;
      this.onUpdate();
    }
  }
}
