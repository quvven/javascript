import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  login() {
    localStorage.setItem("ok","dneme");
  }
}
