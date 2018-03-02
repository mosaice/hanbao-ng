import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Router} from '@angular/router';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AuthModule } from './auth/auth.module';

import { AuthService } from './services/auth.service';
import { APIInterceptor } from './services/api-interceptor.service';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    TransferHttpCacheModule,
    AsyncLocalStorageModule,
    MatButtonModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: APIInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
