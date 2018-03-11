import { Component } from '@angular/core';
import { TuiService } from 'ngx-tui-editor';

@Component({
  selector: 'app-main-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  options: {
    initialValue: `# Title`,
    initialEditType: 'markdown',
    previewStyle: 'vertical',
    height: 'auto',
    minHeight: '500px'
  };

  constructor(private editorService: TuiService) {}

  submit() {
    console.log(this.editorService.getHtml());
  }

}
