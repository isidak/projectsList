import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { NewFormComponent } from './components/new-form/new-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { EditComponent } from './components/edit/edit.component';


@NgModule({
  declarations: [UsersComponent, CreateComponent, ListComponent, NewFormComponent, UserComponent, EditComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
