import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseFormComponent} from '../base-form/base-form.component';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent extends BaseFormComponent implements  OnInit {
  @Output() saveForm = new EventEmitter();
  form: FormGroup;

  constructor(public fb: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
  }

  save(): void {
    this.saveForm.emit(this.form.value);
  }

  protected generateFG(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

}
