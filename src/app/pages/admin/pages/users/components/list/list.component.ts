import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {UserModel} from '../../models/user.model';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  users: Observable<UserModel[]>;
  editedUser$ = new BehaviorSubject<UserModel>(null);

  private subscriptions = new Subscription();

  constructor(private userService: UsersService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.userSubscription();
  }

  getUsers(): void {
    const userSub = this.userService.getUsers().subscribe();
    this.subscriptions.add(userSub);
  }

  editUser(user: UserModel): void {
    this.userService.setCurrentUser(user);
    this.router.navigate(['admin/users/edit-form/', user.id]);
  }

  deleteUser(id): void{
    this.userService.deleteUser(id).subscribe();
  }

  private userSubscription(): void {
    this.users = this.userService.users$;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
