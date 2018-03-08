import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';


@NgModule({
    imports: [
        AppModule,
        BrowserAnimationsModule,
    ],
    bootstrap: [AppComponent],
})
export class AppBrowserModule { }
