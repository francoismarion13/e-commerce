import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { activeUser } from './../../environments/environment'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  categories;
  activeUser;

  constructor(private cS: CategoryService) { }

  ngOnInit() {
    this.cS.getCategory().subscribe(data => {this.categories = data; });
    this.activeUser = activeUser;
  }
}