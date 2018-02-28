import {Component} from '@angular/core';

@Component({
  selector: 'app-main-container',
  template: `
  <div>
    <div>Container</div>
    <router-outlet></router-outlet>
  </div>`,
  styles: []
})
export class ContainerComponent {}
