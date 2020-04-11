import { Injectable } from "@angular/core";
import { User } from "../login/user";

@Injectable()
export class AccountService {
  constructor() {}
  loggedin:boolean = false;

  login(user: User): boolean {
    if (user.username === "admin" && user.password === "123") {
      this.loggedin=true;
      localStorage.setItem("isLogged",user.username);
      return true;
    } else {
      return false;
    }
  }

  isLoggedin() {
    return this.loggedin;
  }

  logout() {
    localStorage.removeItem("isLogged");
    this.loggedin=false;
  }
}
