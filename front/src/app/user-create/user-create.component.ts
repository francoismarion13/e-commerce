import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Customer } from '../classes/customer';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  
  gender; lastname; firstname; dateOfBirth; username; password; email; cardName; cardDate; 
    add1; add2; cp; ville; phone; cardNumber; cardSec: string;
  user: Customer;
  card; adress: string[];

  constructor(private uS: UserServiceService) { }

  ngOnInit() {
  }

  onCreateUser(){
    this.card = [ this.cardNumber, this.cardName, this.cardDate, this.cardSec ];
    this.adress = [ this.add1, this.add2, this.cp, this.ville ];

    this.user = new Customer(this.gender, this.lastname, this.firstname, this.dateOfBirth,
      this.username, this.password, this.email, this.phone, this.card, this.adress );
    
    console.log(this.user);

    this.uS.createUSer(this.user).subscribe();
  }
}
