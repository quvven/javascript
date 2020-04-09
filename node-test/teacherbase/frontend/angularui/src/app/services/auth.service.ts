import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterUser } from '../components/register/user';
import { Observable } from 'rxjs';
import { LoginUser } from '../components/login/login';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  path = environment.path;
  TOKEN_KEY="token";

  register(user:RegisterUser) {
    let header = new HttpHeaders();
    header.append("Content-Type","application/json");
    this.httpClient.post(this.path+'/user/register',user,{headers:header}).subscribe(data=>{
      
    });
  }

  login(user:LoginUser) {
    let header = new HttpHeaders();
    header.append("Content-Type","application/json");
    this.httpClient.post(this.path+'/user/login',user,{headers:header}).subscribe(data=>{
      this.saveToken(data['token'])
    });
  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY,token)
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY)
  }

  get isAuth() {
    return !! localStorage.getItem(this.TOKEN_KEY)
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY)
  }
}
