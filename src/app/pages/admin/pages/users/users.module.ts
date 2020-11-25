import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {CreateComponent} from './components/create/create.component';
import {ListComponent} from './components/list/list.component';
import {NewFormComponent} from './components/form/new-user-form/new-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserComponent} from './components/user/user.component';
import {EditFormComponent} from './components/form/edit-form/edit.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SideNavbarComponent} from './components/side-navbar/side-navbar.component';


@NgModule({
  declarations: [UsersComponent, CreateComponent, ListComponent,
    NewFormComponent, UserComponent, EditFormComponent, NavbarComponent, SideNavbarComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
