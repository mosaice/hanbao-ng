import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { TuiModule } from 'ngx-tui-editor';

import { MainUiService } from './main-ui.service';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EditorComponent } from './editor/editor.component';
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
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'editor',
        component: EditorComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    // TuiModule,
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
    EditorComponent,
    ContainerComponent
  ],
  providers: [
    MainUiService
  ]

})
export class MainModule {}
