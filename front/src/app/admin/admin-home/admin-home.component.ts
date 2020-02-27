import { Component, OnInit } from '@angular/core';
import { PrincipaleService } from '../adminServices/principale.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private principale: PrincipaleService) { }

  ngOnInit() {
    this.principale.pageAdminActive='adminHome';
  }

}
