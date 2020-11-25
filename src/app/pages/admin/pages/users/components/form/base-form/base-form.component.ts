import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  template: '',
})
export abstract class BaseFormComponent {

  form: FormGroup;

  protected abstract generateFG(): FormGroup;

  protected createForm(): void {
    this.form = this.generateFG();
  }

}
