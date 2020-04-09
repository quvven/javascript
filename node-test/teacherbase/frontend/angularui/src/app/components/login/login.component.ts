import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthorService]
})

export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }
  loginUser:any = {}

  ngOnInit(): void {
  }

  login(loginUser) {
    this.authService.login(loginUser)
  }

}
