import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheCategoryComponent } from './fiche-category.component';

describe('FicheCategoryComponent', () => {
  let component: FicheCategoryComponent;
  let fixture: ComponentFixture<FicheCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FicheCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
