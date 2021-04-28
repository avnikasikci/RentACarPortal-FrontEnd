import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { TokenModel } from '../models/tokenModel';
import { TokenModel } from 'src/app/models/tokenModel';

import { LocalStorageService } from 'src/app/services/local-storage.service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // constructor() {}
     constructor(private localStorageService: LocalStorageService) {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // debugger;    
    let token = localStorage.getItem("tokenModel");
    let newRequest : HttpRequest<any>;
    newRequest = request.clone({
      headers: request.headers.set("Authorization","Bearer " + token)
    })
    return next.handle(newRequest);
  }
}
// export class AuthInterceptor implements HttpInterceptor {
//   constructor(private localStorageService: LocalStorageService) {}

//   intercept(
//     request: HttpRequest<any>,    next: HttpHandler  ): Observable<HttpEvent<unknown>> {
//     let tokenModel: TokenModel | null = this.localStorageService.get<TokenModel>(
//       'tokenModel'
//     );

//     let newRequest: HttpRequest<any> = request.clone({
//       headers: request.headers.set(
//         'Authorization',
//         `Bearer ${tokenModel?.token}`
//       ),
//     });

//     return next.handle(newRequest);
//   }
// }

//Error
