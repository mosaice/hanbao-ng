import {Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <simple-notifications [options]="options"></simple-notifications>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  options = {
    position: ['top', 'right'],
    timeOut: 3000,
    // preventLastDuplicates: true,
    lastOnBottom: true
  };

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.checkLoggedIn();
  }
}
