import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { NotificationsService } from 'angular2-notifications';

interface User {
  id: number;
  email: string;
  name: string;
  description: string;
  avator: string;
  sex: string;
  loginCount: number;
}

interface LoginRes extends User {
  jwtoken: {
    expires_in: string,
    access_token: string;
  };
}

@Injectable()
export class UserService {
  user: User | null;

  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router,
    private notify: NotificationsService
  ) { }

  login(form: { email: string, pasword: string}) {
    this.http.post<Res<LoginRes>>('/user/signin', form)
    .subscribe( ({ data: { jwtoken: { access_token }, ...user}}) => {
      this.user = user;
      this.auth.save(access_token);
      this.router.navigate(['/']);
    });
  }

  register(form: {email: string, pasword: string, name: string}) {
    this.http.post<Res<{}>>('/user', form)
    .subscribe(({ message }) => {
      this.notify.success(message, message);
    });
  }

  sendResetMail(form: {email: string}) {
    this.http.post<Res<{}>>('/user/password', form)
    .subscribe(({ message }) => {
      this.notify.success(message, message);
    });
  }

  resetPassword(form: { userKey: string, password: string}) {
    this.http.post<Res<{}>>('/user/reset', form)
    .subscribe(({ message }) => {
      this.notify.success(message, message);
    });
  }

}
