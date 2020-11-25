import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user: UserModel;
  @Output() edited = new EventEmitter();
  @Output() deleted = new EventEmitter();

  editUser(user): void {
    this.edited.emit(user);
  }

  deleteUser(id): void {
    this.deleted.emit(id);
  }

}
