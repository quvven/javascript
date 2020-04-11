import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
import { AccountService } from '../services/account.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private accountService:AccountService,
    private alertifyService:AlertifyService
  ) { }
  model:User = new User();

  ngOnInit(): void {
  }

  login(form:NgForm) {
    if(this.accountService.login(this.model)) {
      this.alertifyService.success("Kullanıcı girişi başarılı")
    } else {
      this.alertifyService.error("Kullanıcı adı veya parola hatalı!")
    }
  }

}
