import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService
      .checkLogInState()
      .subscribe((res) => (this.isLoggedIn = res));
  }

  onLogin() {
    this.authService.login().subscribe((res) => {
      this.isLoggedIn = res;

      this.router.navigate(['/dash']);
    });
  }

  onLogout() {
    this.authService.logout().subscribe((res) => (this.isLoggedIn = res));
  }
}
