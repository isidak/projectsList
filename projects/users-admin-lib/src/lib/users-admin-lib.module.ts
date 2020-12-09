import { NgModule } from '@angular/core';
import { UsersAdminLibComponent } from './users-admin-lib.component';
import {UsersModule} from './users/users.module';



@NgModule({
  declarations: [UsersAdminLibComponent],
  imports: [
    UsersModule
  ],
  exports: [UsersAdminLibComponent, UsersModule]
})
export class UsersAdminLibModule { }
