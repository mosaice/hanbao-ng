import { Component, OnInit } from '@angular/core';
const TuiEditor = require('tui-editor/dist/tui-editor-Editor-all.min');



@Component({
  selector: 'app-main-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit  {
  editor: any;
  options: {
    initialValue: '# Title of Project',
    initialEditType: 'markdown',
    previewStyle: 'tab',
    height: 'auto',
    minHeight: '500px',
    exts: ['colorSyntax']
  };


  submit() {
    console.log(this.editor.getHtml());
  }

  ngOnInit() {
    this.editor = new TuiEditor({
      el: document.querySelector('#editor'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: 'auto',
      minHeight: '500px',
      exts: ['scrollSync', 'colorSyntax', 'table']
    });
  }

}
