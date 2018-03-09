import { Injectable } from '@angular/core';

@Injectable()
export class MainUiService {
  drawerOpened = true;

  toggleDrawer() {
    this.drawerOpened = !this.drawerOpened;
  }
}
