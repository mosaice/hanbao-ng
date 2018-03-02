import {Component} from '@angular/core';

@Component({
  selector: 'app-main-container',
  template: `
  <div>
    <div>Container</div>
    <a routerLink="/user/login">User</a>
    <router-outlet></router-outlet>
  </div>`,
  styles: []
})
export class ContainerComponent {}
