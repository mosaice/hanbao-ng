import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { MatButtonModule, MatRadioModule, MatInputModule, MatMenuModule, MatCheckboxModule } from '@angular/material';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot', component: ForgotComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
  }
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'forgot', component: ForgotComponent },
  // { path: 'reset', component: ResetComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatMenuModule,
    MatCheckboxModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    UserComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ResetComponent
  ]

})
export class UserModule { }
