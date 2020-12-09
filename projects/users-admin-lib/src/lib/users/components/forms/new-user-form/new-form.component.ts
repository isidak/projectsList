import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AbstractFormComponent} from '../abstract-form/abstract-form.component';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent extends AbstractFormComponent {
  @Output() saveForm = new EventEmitter();
  form: FormGroup;

  constructor(public fb: FormBuilder) {
    super();
  }

  save(): void {
    this.saveForm.emit(this.form.value);
    this.clearForm();
  }

  protected generateFormGroup(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

}
