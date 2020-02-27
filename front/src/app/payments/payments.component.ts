import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../services/payments.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
payments;
_id;
  constructor(private uS: PaymentsService, private route : ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this._id = params.get('id')

      this.uS.getPaymentsById(this._id).subscribe(data => {
        this.payments = data
        console.log(data)

  })
    });


  }
    submit() {

      window.alert("paiement accepté");
      this.router.navigate(['/payments/accepted']);
   }
}

