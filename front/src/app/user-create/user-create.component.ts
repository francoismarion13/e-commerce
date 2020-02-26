import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../classes/user';
import { isNumber, isNull } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  gender; lastname; firstname; dateOfBirth; username; password; email; cardName; cardDate;
  add1; add2; cp; ville; phone; cardNumber; cardSec: string;
  user: User;
  card: any[];
  adress: any[];
  presChecked: boolean;

  constructor(private uS: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.card = [];
    this.adress = [];
    this.presChecked = false;
  }

  onCreateUser(e) {
    e.preventDefault()
    this.presChecked = false;
    if(this.gender != null && this.lastname != null && this.firstname != null && 
    this.dateOfBirth != null && this.username != null && this.password != null && 
    this.email != null && this.cardNumber != null && this.cardName != null && 
    this.cardDate != null && this.cardSec != null && this.add1 != null && this.cp != null && 
    this.ville != null){
      if(!isNumber(this.cardNumber)){
        alert("Le numéro de carte bleu n'est pas numérique");
      }else if(!isNumber(this.cp)){
        alert("Le code postal n'est pas au format numérique");
      }else if(this.phone != null && !isNumber(this.phone)){
        alert("Le numéro de téléphone saisie n'est pas format numérique");
      }else{
        this.card.push({
          cardNumber: this.cardNumber,
          cardUserName: this.cardName,
          cardDate: this.cardDate,
          cardSecretVerif: this.cardSec
        });
        this.adress.push({
          adresse1: this.add1,
          adresse2: this.add2,
          codePostal: this.cp,
          ville: this.ville
        });
  
        this.user = new User(this.gender, this.lastname, this.firstname, this.dateOfBirth,
          this.username, this.password, this.email, this.phone, this.card, this.adress);
  
        this.uS.createUSer(this.user).subscribe(data => {
          if(data == null){
            alert("le user n'a pas été créé !")
          }else{
            alert("User créé !")
            this.router.navigate(['/userConnect']);
          }
        })
      }
    }else{
      this.presChecked = true;
    }
  }
}
