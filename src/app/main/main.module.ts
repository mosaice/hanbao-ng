import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NgZorroAntdModule } from 'ng-zorro-antd';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';

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
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [
    HomeComponent,
    ContainerComponent
  ]

})
export class MainModule {}
