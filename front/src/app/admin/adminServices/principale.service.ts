import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrincipaleService {
  pageAdminActive:String = 'adminHome';
  authAdmin: boolean = false;

  constructor() { }
}
