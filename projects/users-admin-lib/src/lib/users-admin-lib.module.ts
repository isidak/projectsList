import {NgModule} from '@angular/core';
import {NewFormComponent} from './users/components/forms/new-user-form/new-form.component';
import {UserComponent} from './users/components/user/user.component';
import {EditFormComponent} from './users/components/forms/edit-form/edit.component';
import {BaseUserComponent} from './users/components/user/base-user/base-user.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [NewFormComponent, UserComponent, EditFormComponent, BaseUserComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [NewFormComponent, UserComponent, EditFormComponent, BaseUserComponent]
})
export class UsersAdminLibModule { }
