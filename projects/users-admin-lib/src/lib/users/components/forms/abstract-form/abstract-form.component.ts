import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  template: '',
})
export abstract class AbstractFormComponent implements OnInit {

  form: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  protected abstract generateFormGroup(): FormGroup;

  protected createForm(): void {
    this.form = this.generateFormGroup();
  }

  protected clearForm(): void {
    this.form.reset();
  }

}
