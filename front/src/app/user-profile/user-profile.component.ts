import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { sessionGlobal } from 'src/environments/environment';

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

  constructor(private uS: UserServiceService, private route: ActivatedRoute, private router: Router) { }

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
      alert('Mise(s) à jour bien effectuée(s)');
      this.router.navigate(['/userProfile/'+sessionGlobal.activeUser._id]);
    });
  }

  addAdress(){
    if(this.newAdress != null){
      sessionGlobal.activeUser.adresses.push(this.newAdress);
      this.user = sessionGlobal.activeUser;
      alert(`Nouvelle adresse ajoutée !\nMerci de cliquer sur le bouton Updater une fois vos modifications effectuées`);
    }
  }
  
  delAdress(adresse){
    let temp;
    if(sessionGlobal.activeUser.adresses.length == 1){
      alert('Vous ne pouvez pas supprimer votre seule et unique adresse !')
    }else{
      for(let i = 0; i < sessionGlobal.activeUser.adresses.length; i++ ){
        if(sessionGlobal.activeUser.adresses[i]._id == adresse._id) temp = i;
      }
      sessionGlobal.activeUser.adresses.splice(temp);
      this.user = sessionGlobal.activeUser;
      alert(`Adresse supprimée !\nMerci de cliquer sur le bouton Updater une fois vos modifications effectuées`);
    }
  }

  addCard(){
    if(this.newCard != null){
      sessionGlobal.activeUser.cards.push(this.newCard);
      this.user = sessionGlobal.activeUser;
      alert(`Nouvelle carte ajoutée !\nMerci de cliquer sur le bouton Updater une fois vos modifications effectuées`);
    }
  }
  
  delCard(card){
    let temp;
    if(sessionGlobal.activeUser.cards.length == 1){
      alert('Vous ne pouvez pas supprimer votre seule et unique moyen de paiement !')
    }else{
      for(let i = 0; i < sessionGlobal.activeUser.cards.length; i++ ){
        if(sessionGlobal.activeUser.cards[i]._id == card._id) temp = i;
      }
      sessionGlobal.activeUser.cards.splice(temp);
      this.user = sessionGlobal.activeUser;
      alert(`Carte supprimée !\nMerci de cliquer sur le bouton Updater une fois vos modifications effectuées`);
    }
  }
}
