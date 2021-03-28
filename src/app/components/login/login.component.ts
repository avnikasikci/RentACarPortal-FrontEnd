import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarService } from 'src/app/services/navbar.service';
import { NaviComponent } from '../navi/navi.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  
  constructor(private formBuilder:FormBuilder,
     private authService:AuthService, private toastrService:ToastrService
     ,private navbarService:NavbarService) { }

  ngOnInit(): void {

    this.createLoginForm();
    var _Test=new NaviComponent(this.navbarService).setShowCompenentsChange;
    
  }

  createLoginForm(){
  this.navbarService.setNavbarShow(false);
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }


  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(response=>{
        this.toastrService.info(response.message)
        localStorage.setItem("token",response.data.token)
      },responseError=>{
        //console.log(responseError)
        this.toastrService.error(responseError.error)
      })
    }
  }

}
