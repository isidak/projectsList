import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: UserModel;
  @Output() edited = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  editUser(user): void {
    this.edited.emit(user);
  }

}
