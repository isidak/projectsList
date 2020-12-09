import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersAdminLibModule} from 'users-admin-lib';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersAdminLibModule
  ],
  exports: [UsersAdminLibModule]
})
export class UsersLibModule { }
