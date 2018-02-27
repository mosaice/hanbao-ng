import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
  { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'},
  { path: 'user', loadChildren: './user/user.module#UserModule'}
];

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
