import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // TODO: change _registerUrl and _loginUrl

  private _registerUrl = 'http://localhost:8000/auth/register';
  private _loginUrl = 'http://localhost:8000/auth/login';
  constructor(private http: HttpClient, private _router: Router) {}

  // sends user registration infomation from registration component template to the server
  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  // sends user login information to the server
  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  // returns boolean value if user is logged in or not
  loggedIn() {
    return !!localStorage.getItem('token');
  }

  // redirects user to login page? when logout button pressed
  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  // receives token and stores it in local storage
  getToken() {
    return localStorage.getItem('token');
  }
}
