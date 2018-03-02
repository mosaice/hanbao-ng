import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

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

  constructor(private http: HttpClient, private auth: AuthService, private router: Router) { }

  login(form: { email: string, pasword: string}) {
    this.http.post<Res<LoginRes>>('/user/signin', form)
    .subscribe( ({ data: { jwtoken: { access_token }, ...user}}) => {
      this.user = user;
      this.auth.save(access_token);
      this.router.navigate(['/']);
    });
  }

}
