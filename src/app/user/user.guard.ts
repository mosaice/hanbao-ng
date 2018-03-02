import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UserGuard implements CanLoad, CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }

  canLoad(route: Route): boolean {
    if (this.auth.loggedIn()) {
      return false;
    } else {
      return true;
    }
  }
}
