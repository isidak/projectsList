import {Component, ViewChild} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {NewFormComponent} from '../new-form/new-form.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  @ViewChild(NewFormComponent) form: NewFormComponent;

  constructor(public userService: UsersService) { }

  addUser(user): void{
    this.userService.addUser(user).subscribe(() => this.form.clearForm());
  }

}
