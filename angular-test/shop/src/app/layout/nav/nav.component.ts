import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(
    private accountService:AccountService
  ) {}

  ngOnInit(): void {
  }
  
  isLogin() {
    return this.accountService.isLoggedin();
  }
  
  logout() {
    this.accountService.logout();
  }

}
