import { Injectable } from '@angular/core';
import { NavbarIsShow} from '../models/NavbarIsShow';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }
isNavbarShow:boolean=true;

  setNavbarShow(param:boolean){
    this.isNavbarShow=param;
    console.log("Aga benim set ettiğim deger"+this.isNavbarShow);
  }
  getNavbarShow(){
    console.log("Aga benim get ettiğim deger: "+this.isNavbarShow);
   return  this.isNavbarShow; 
  }

}
