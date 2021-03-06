import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;

  passwordHidden: boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private toastrService: ToastrService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    debugger;
    if (!this.loginForm.valid) {
      return;
    }
    let loginModel: LoginModel = { ...this.loginForm.value };
    this.authService.login(loginModel).subscribe(
      (response) => {
                  debugger;
            var _StrResponse=JSON.stringify(response);
            var obj=JSON.parse(_StrResponse);
            console.log(obj.token);
            debugger;
            // let objToken=obj.token.tostring().replaceAll('"');

        this.localStorageService.set('tokenModel', response.data);
        this.localStorageService.set('tokenModel', obj?.token);
        this.localStorageService.set('token', obj?.token?.tostr);
        this.localStorageService.set(
          'userMail',
          this.loginForm.get('email')?.value
        );
        this.getUserDetailByEmail(this.loginForm.get('email')?.value);
        this.toastrService.info(response.message);
        this.router.navigateByUrl('');
      },
      (errorResponse) => this.toastrService.error(errorResponse.error)
    );
  }

  getUserDetailByEmail(mail: string) {
    this.userService.getUserDetailByEmail(mail).subscribe((response) => {
      this.authService.setUserDetail(response.data);
    });
  }

  togglePasswordHidden() {
    this.passwordHidden = !this.passwordHidden;
  }

  isPasswordHidden(): string {
    return this.passwordHidden ? 'password' : 'text';
  }

  isPasswordHiddenIcon(): string {
    return this.passwordHidden ? 'fa-eye-slash' : 'fa-eye text-primary';
  }
}
