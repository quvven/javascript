import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterUser } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService:AuthService) { }
  registerUser:any={}

  ngOnInit(): void {
  }

  register(user:RegisterUser) {
    this.authService.register(user);
  }

}
