import {Component, OnDestroy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../../../models/user.model';
import {UsersService} from '../../../services/users.service';
import {Router} from '@angular/router';
import {ListComponent} from '../list/list.component';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent extends ListComponent implements OnDestroy {

  editedUser$ = new BehaviorSubject<UserModel>(null);

  constructor(public userService: UsersService,
              private router: Router) {
    super(userService);
  }

  editUser(user: UserModel): void {
    this.userService.setCurrentUser(user);
    this.router.navigate(['admin/users/edit-forms/', user.id]);
  }

  deleteUser(id): void {
    const deleteSub = this.userService.deleteUser(id).subscribe();
    this.subscriptions.add(deleteSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
