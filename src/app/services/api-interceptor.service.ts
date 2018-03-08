import { Injectable, Injector } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(private toast: NotificationsService, private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = 'http://localhost:3000/api/v1';
    const successStatus = [200, 201];
    let headers = req.headers.append('source', 'web');
    headers = headers.append('Content-Type', 'application/json');
    if (this.auth.isLogin) {
      headers = headers.append('Authorization', `Bearer ${this.auth.token}`);
    }
    if (req.url.includes('[noErrorCatch]')) {
      const request = req.clone({url: url + req.url.replace('[noErrorCatch]', ''), headers});
      return next.handle(request);
    }
    const clonedRequest = req.clone({url: url + req.url, headers});
    return next.handle(clonedRequest)
    .filter((ev: HttpEvent<any>) => {
      if (ev instanceof HttpResponse) {
        if (!successStatus.includes(ev.status) || ev.body.statusCode !== 200) {
          this.toast.error(ev.body.error, ev.body.message);
          return false;
        }
      }
      return true;
    })
    .catch((response: any) => {
      if (response instanceof HttpErrorResponse) {
        console.log('response in the catch: ', response);
        this.toast.error('Unexpected Error', response.message);
      }

      return Observable.throw(response);
    });
  }
}
