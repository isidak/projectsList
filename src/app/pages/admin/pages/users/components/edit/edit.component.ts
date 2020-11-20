import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {NewFormComponent} from '../new-form/new-form.component';
import {FormBuilder, Validators} from '@angular/forms';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent extends NewFormComponent implements OnInit {
  @Input() user: UserModel;
  @Output() userSaved = new EventEmitter();
  showButtons = {
    address: false,
    status: false,
    image: false
  };

  constructor(public fb: FormBuilder,
              private usersService: UsersService) {
    super(fb);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.patchForm();
    this.checkUserProfile();
  }

  patchForm(): void {
    this.form.patchValue({
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
    });
  }

  checkUserProfile(): void {
    Object.keys(this.user).forEach((key) => {
      if (key !== 'firstName' || 'lastName' || 'email') {
        this.addControl(key);
      }
    });
  }

  addControl(controlName): void {
    this.showButtons[controlName] = true;
    this.form.addControl(controlName, this.fb.control(this.user[controlName], Validators.required));
  }

  editUser(): void {
    this.usersService.updateUser(this.form.value, this.user.id).subscribe(() => {
      this.userSaved.next();
      this.form.reset();
      this.user = null;
    });
  }

}
