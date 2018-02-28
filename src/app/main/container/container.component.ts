import {Component} from '@angular/core';

@Component({
  selector: 'app-main-container',
  template: `
  <div>
    <div>Container</div>
    <button mat-fab color="primary">reset</button>
    <router-outlet></router-outlet>
  </div>`,
  styles: []
})
export class ContainerComponent {}
