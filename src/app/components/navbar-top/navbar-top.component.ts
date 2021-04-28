import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetail } from 'src/app/models/userDetail';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.css']
})
export class NavbarTopComponent implements OnInit {

  
  userDetail$: Observable<UserDetail | undefined> = this.authService.getUserDetail();

  constructor(private authService: AuthService) {}
    LoginStatus$ : Observable<boolean>;
    UserName$ : Observable<string>;    
  ngOnInit(): void {
  }

}
