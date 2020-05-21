import { Injectable } from '@angular/core';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor() {}

  checkLogInState() {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

    this.isLoggedIn = isLoggedIn;

    return of(isLoggedIn);
  }

  login() {
    localStorage.setItem('isLoggedIn', JSON.stringify(true));

    this.isLoggedIn = true;

    return of(true);
  }

  logout() {
    localStorage.removeItem('isLoggedIn');

    this.isLoggedIn = false;

    return of(false);
  }
}
