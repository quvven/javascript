import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req,next) {
    var authService = this.injector.get(AuthService)
    if(authService.isAuth) {
      var authRequest = req.clone({
        headers:req.headers.set('authorization', 'Token '+ authService.token)
      })
      return next.handle(authRequest)
    } else {
      return next.handle(req)
    }
  }
  
}
