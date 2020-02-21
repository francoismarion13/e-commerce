import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-fiche-category',
  templateUrl: './fiche-category.component.html',
  styleUrls: ['./fiche-category.component.css']
})
export class FicheCategoryComponent implements OnInit {
  category;
  tabProcts;
  id;

  constructor(private cS: CategoryService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap) => {
      this.id = params.get('id') ? params.get('id') : "5e4e598db07d2c4c1da1e399"
      this.cS.getCategoryById(this.id).subscribe(data => {
        this.category = data;
        this.tabProcts = this.category;
        console.log(this.category.products);
      });
    });

  }

}
