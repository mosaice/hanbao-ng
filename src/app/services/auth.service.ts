import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import * as jwtDecode from 'jwt-decode';

interface User {
  id: number;
  email: string;
  name: string;
  iat: number;
  exp: number;
}

@Injectable()
export class AuthService {
  isLogin = false;
  token: string | null;
  user: User | null;

  constructor(
    private toast: NotificationsService,
    private router: Router,
    protected localStorage: AsyncLocalStorage
  ) {}

  checkLoggedIn() {
    const token = localStorage.getItem('hanbaoJWT');
    if (!token) {
      this.token = null;
      this.user = null;
      this.isLogin = false;
      return;
    }
    try {
      const user: User = jwtDecode(token);
      if (Date.now() > user.exp * 1000) {
        this.token = null;
        this.user = null;
        this.isLogin = false;
        this.toast.warn('Token 过期', '请重新登录');
        localStorage.removeItem('hanbaoJWT');
        this.router.navigate(['/user/login']);
        return;
      }

      this.token = token;
      this.user = user;
      this.isLogin = true;
    } catch (error) {

      this.token = null;
      this.user = null;
      this.isLogin = false;

      this.toast.error(error.name, error.message);
      localStorage.removeItem('hanbaoJWT');
    }
  }

  loggedIn() {
    return this.isLogin;
  }

  save(token: string) {
    localStorage.setItem('hanbaoJWT', token);
    this.checkLoggedIn();
  }

}
