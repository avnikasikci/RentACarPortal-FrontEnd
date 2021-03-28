import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { NavbarService } from '../services/navbar.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private authService:AuthService,
     private toastrService:ToastrService,
      private router:Router,
      private navbarService:NavbarService){

  }
isNavbarShow:boolean=true;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authService.isAuthenticated()){
        this.isNavbarShow=true;
        this.navbarService.setNavbarShow(true);
        return true;
      }else{
        this.router.navigate(["login"])
        // this.router.navigate(["/user/home"])
        this.toastrService.info("Sisteme giriş yapmalısınız")
        //Remove Navbar        
        this.isNavbarShow=false;
        this.navbarService.setNavbarShow(false);
        return false;
      }
  }
  
}
