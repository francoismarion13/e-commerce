import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from '../classes/user';

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

  constructor(private uS: UserServiceService) { }

  ngOnInit() {
    this.card = [];
    this.adress = [];
    this.presChecked = false;
  }

  onCreateUser(e) {
    e.preventDefault()
    if(this.gender != null || this.lastname != null || this.firstname != null || 
      this.dateOfBirth != null || this.username != null || this.password != null || 
      this.email != null || this.cardName != null || this.cardDate != null || this.add1 != null || 
      this.add2 != null || this.cp != null || this.ville != null || this.phone != null || 
      this.cardNumber != null || this.cardSec != null){
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
        }
      })
    }else{
      this.presChecked = true;
    }
  }
}
