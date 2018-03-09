import {Component} from '@angular/core';
import { MainUiService } from '../main-ui.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private uiState: MainUiService) {}
}
