import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { MatButtonModule, MatSidenavModule, MatCheckboxModule } from '@angular/material';

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
    MatSidenavModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [
    HomeComponent,
    ContainerComponent
  ]

})
export class MainModule {}
