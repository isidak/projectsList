import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from 'users-admin-lib';
import {UserModel} from '../../../models/user.model';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  users: Observable<UserModel[]>;

  protected subscriptions = new Subscription();

  constructor(public userService: UsersService) {
  }

  ngOnInit(): void {
    this.usersSubscription();
    this.getUsers();
  }

  usersSubscription(): void {
    const userSub = this.userService.getUsers().subscribe();
    this.subscriptions.add(userSub);
  }

  getUsers(): void {
    this.users = this.userService.users$;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
