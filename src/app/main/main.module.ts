import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainUiService } from './main-ui.service';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {
  MatButtonModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatInputModule,
  MatMenuModule,
  MatIconModule
} from '@angular/material';

const mainRoutes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
        // canActivateChild: [AuthGuard],
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [
    HeaderComponent,
    HomeComponent,
    ContainerComponent
  ],
  providers: [
    MainUiService
  ]

})
export class MainModule {}
