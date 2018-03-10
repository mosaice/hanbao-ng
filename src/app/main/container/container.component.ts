import {Component} from '@angular/core';
import { MainUiService } from '../main-ui.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  constructor(public uiState: MainUiService) {}
}
