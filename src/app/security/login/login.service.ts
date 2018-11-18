import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'


import {MEAT_API} from './../../app.api'
import {User} from './user.model'
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class LoginService{

    user: User
    lastUrl : string
  

    constructor(private http : HttpClient,
                private router: Router){
    
        this.router.events.filter(e => e instanceof NavigationEnd)
                          .subscribe((e: NavigationEnd) => this.lastUrl = e.url )                
    }

    isLoggedIn():boolean{
        return this.user !== undefined
    }

    login(user: User): Observable<User>{
        
        
        return this.http.post<User>(`${MEAT_API}/users/login`, user)
                        .do((user) => {
                            this.user = user
                            console.log(this.user)
                        })
    }

    handleLogin(path : string = this.lastUrl){
        this.router.navigate(['/login', btoa(path)])
    }

    logout(){
        this.user = undefined
    }

    public buscarUserJSON(): Observable<any> {
        return this.http.get<User>("./assets/user.json")
    }

    public salvarUserJSON(){
        debugger
        const path = "./assets/user.json";
        let jsonText = '{"name":"Anderson", "email": "anderson.alves@yahoo.com.br"}'
        let json = JSON.parse(jsonText)
        
    } 

}