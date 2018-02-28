import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Router} from '@angular/router';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import {TransferHttpCacheModule} from '@nguniversal/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    TransferHttpCacheModule,
    MatButtonModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
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
