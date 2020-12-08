import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {CreateComponent} from './components/create-user/create.component';
import {ListComponent} from './components/lists/list/list.component';
import {NewFormComponent} from './components/forms/new-user-form/new-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './components/user/user.component';
import {EditFormComponent} from './components/forms/edit-form/edit.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SideNavbarComponent} from './components/side-navbar/side-navbar.component';
import {EditListComponent} from './components/lists/edit-list/edit-list.component';
import {BaseUserComponent} from './components/user/base-user/base-user.component';
import {LoginComponent} from './components/login/login.component';
import {NotAuthorizedComponent} from './components/not-authorized/not-authorized.component';


@NgModule({
  declarations: [UsersComponent, CreateComponent, ListComponent,
    NewFormComponent, UserComponent, EditFormComponent, NavbarComponent,
    SideNavbarComponent, EditListComponent, BaseUserComponent, LoginComponent, NotAuthorizedComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule {
}
