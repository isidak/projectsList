import {Component, EventEmitter, Output} from '@angular/core';
import {BaseUserComponent} from './base-user/base-user.component';

@Component({
  selector: 'lib-app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends BaseUserComponent {

  @Output() edited = new EventEmitter();
  @Output() deleted = new EventEmitter();

  editUser(user): void {
    this.edited.emit(user);
  }

  deleteUser(id): void {
    this.deleted.emit(id);
  }

}
