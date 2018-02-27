import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@Component({
  selector: 'app-lazy-view',
  template: `<button nz-button [nzType]="'primary'">测试按钮</button>`
})
export class LazyComponent {}

@NgModule({
  declarations: [LazyComponent],
  imports: [
    NgZorroAntdModule,
    RouterModule.forChild([
      { path: '', component: LazyComponent, pathMatch: 'full'}
    ])
  ]
})
export class LazyModule {

}
