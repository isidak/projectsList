import {Component, Input} from '@angular/core';
import {UserModel} from '../../models/user.model';

@Component({
  selector: 'app-base-user',
  templateUrl: './base-user.component.html',
  styleUrls: ['./base-user.component.css']
})
export class BaseUserComponent {
  @Input() user: UserModel;
}
