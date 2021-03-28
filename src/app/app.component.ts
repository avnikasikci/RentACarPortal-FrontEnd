import { Component, OnInit } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  products: Product[] = [];
  dataLoaded = false;
  filterText="";
  isShown = true; //hidden every time subscribe detects change
  public show:boolean = false;
  public buttonName:any = 'Show';
  
  constructor() {}

  ngOnInit(): void {
    
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  isShowCompenets(param:boolean){
    console.log("Ben isshowcompenets fonk. calistirdilar");
    this.isShown=false;
  }
}


