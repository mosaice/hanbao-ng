import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';

const userRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'reset', component: ResetComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // {
  //   path: '',
  //   component: AdminComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: '',
  //       canActivateChild: [AuthGuard],
  //       children: [
  //         { path: 'crises', component: ManageCrisesComponent },
  //         { path: 'heroes', component: ManageHeroesComponent },
  //         { path: '', component: AdminDashboardComponent }
  //       ]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule {}
