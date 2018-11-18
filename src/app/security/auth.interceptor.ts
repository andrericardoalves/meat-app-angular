import { HttpInterceptor,HttpRequest, HttpEvent, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Injector, Injectable } from "@angular/core";
import { LoginService } from "./login/login.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

   
    constructor(private injector: Injector){}

    intercept(request: HttpRequest<any>, next : HttpHandler): Observable<HttpEvent<any>>{
        
        const loginService = this.injector.get(LoginService)
        if(loginService.isLoggedIn()){

            const accessToken = loginService.user.accessToken;
            const authRequest = request.clone(
                {setHeaders:{'Autorization': `Bearer ${accessToken}`}})
            return next.handle(authRequest)    
        }else{
            return next.handle(request)
        }
      }
}