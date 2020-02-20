import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categorys;

  constructor(private cS: CategoryService) { }

 

  ngOnInit() {
  

  this.cS.getCategory().subscribe(data => {this.categorys = data; });

  }
}