// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { LoginModel } from '../models/loginModel';
// import { SingleResponseModel } from '../models/singleResponseModel';
// import { TokenModel } from '../models/tokenModel';

import { Subject, BehaviorSubject } from "rxjs";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { UserDetail } from '../models/userDetail';
import { AppState } from '../store/app.reducer';
import { deleteUserDetail, setUserDetail } from '../store/auth/auth.actions';
import { LocalStorageService } from './local-storage.service';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrlBefore = 'https://localhost:44366/api/auth/';
  profile$: Subject<any> = new BehaviorSubject<any>({});
  emit(value: any) {
    this.profile$.next(value);
  }
  get profile(): BehaviorSubject<any> {
    return this.profile$ as BehaviorSubject<any>;
  }
///Me İnsert

  apiControllerUrl: string = `${environment.apiUrl}/auth`;
  userDetail$: Observable<UserDetail | undefined> = this.store
    .select((s) => s.appAuth)
    .pipe(map((b) => b.userDetail));
///Me İnsert
  // constructor(private httpClient:HttpClient) { }
  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private store: Store<AppState>,
    private userService:UserService,
  ) {}
  // loginBefore(loginModel:LoginModel){
  //   return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  // }

  // isAuthenticated(){
  //   if(localStorage.getItem("token")){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }
  getUserDetail(): Observable<UserDetail | undefined> {
    // debugger;
  let _Email=localStorage.getItem("userMail");
    this.userService.getUserDetailByEmail(_Email).subscribe((response) => {
      // debugger;
      this.setUserDetail(response.data);
      return this.userDetail$;
    });
    return this.userDetail$;  
  
  }
  isAuthenticated(
    userMail?: string | null,
    requiredRoles?: string[]
  ): Observable<ResponseModel> {
    return this.httpClient.get<ResponseModel>(
      `${this.apiControllerUrl}/isauthenticated`,
      {
        params:
          userMail && requiredRoles
            ? {
                userMail: userMail,
                requiredRoles: requiredRoles.join(','),
              }
            : {},
      }
    );
  }
  login(loginModel:LoginModel){
    debugger;
    var _ReturnResponse=this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrlBefore+"login",loginModel);
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.apiUrlBefore+"login",loginModel)

  }
  setUserDetail(userDetail: UserDetail) {
    // debugger;
    this.store.dispatch(setUserDetail({ userDetail: userDetail }));
  }

  deleteUserDetail() {
    this.store.dispatch(deleteUserDetail());
  }
  logout() {
    this.localStorageService.remove('tokenModel');
    this.localStorageService.remove('userMail');
    this.deleteUserDetail();
    }
  register(  registerModel: RegisterModel  ): Observable<SingleResponseModel<TokenModel>> {
    return this.httpClient.post<SingleResponseModel<TokenModel>>(
      `${this.apiControllerUrl}/register`,
      registerModel
    );
  }


}
