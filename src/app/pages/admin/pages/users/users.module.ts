import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {CreateComponent} from './components/create-user/create.component';
import {ListComponent} from './components/lists/list/list.component';
import {UsersAdminLibModule} from 'users-admin-lib';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './components/navbar/navbar.component';
import {SideNavbarComponent} from './components/side-navbar/side-navbar.component';
import {LoginComponent} from './components/login/login.component';
import {NotAuthorizedComponent} from './components/not-authorized/not-authorized.component';
import {EditListComponent} from './components/lists/edit-list/edit-list.component';


@NgModule({
  declarations: [UsersComponent, CreateComponent, ListComponent, NavbarComponent,
    SideNavbarComponent, LoginComponent, NotAuthorizedComponent, EditListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    UsersAdminLibModule
  ]
})
export class UsersModule {
}
