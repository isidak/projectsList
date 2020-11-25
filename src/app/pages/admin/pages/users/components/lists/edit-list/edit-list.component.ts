import {Component, OnDestroy, OnInit} from '@angular/core';
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
export class EditListComponent extends ListComponent implements OnInit, OnDestroy {

  editedUser$ = new BehaviorSubject<UserModel>(null);

  constructor(public userService: UsersService,
              private router: Router) {
    super(userService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  editUser(user: UserModel): void {
    this.userService.setCurrentUser(user);
    this.router.navigate(['admin/users/edit-form/', user.id]);
  }

  deleteUser(id): void{
    this.userService.deleteUser(id).subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
