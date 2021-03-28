import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginGuard } from 'src/app/guards/login.guard';
import { CartService } from 'src/app/services/cart.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isShown: boolean = true;

  constructor(
    private navbarService:NavbarService
    ) {}

  ngOnInit(): void {
    // this.isShown=this.loginGuard.getNavbarShow();
    this.isShown=this.navbarService.getNavbarShow();
    console.log("(NaviCompenets)Aga benim deger suanda :"+this.isShown)
}
setShowCompenentsChange(){
  console.log("naviCompenets aga ben burdayım false oldm")
  this.isShown=false;
}
}
