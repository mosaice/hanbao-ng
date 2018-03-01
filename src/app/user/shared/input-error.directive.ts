import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({ selector: '[appInputError]'})
export class InputErrorDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appInputError(input: FormControl) {
    const { dirty, errors } = input;
    if (!dirty || !errors) {
      console.log(1111);
      this.viewContainer.clear();
    } else {
      console.log(2222);
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }

}
