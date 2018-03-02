import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';


@NgModule({
    imports: [
        AppModule,
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent],
})
export class AppBrowserModule { }
