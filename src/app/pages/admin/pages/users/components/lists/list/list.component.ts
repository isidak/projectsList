import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';
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
    this.getUsers();
    this.userSubscription();
  }

  getUsers(): void {
    const userSub = this.userService.getUsers().subscribe();
    this.subscriptions.add(userSub);
  }

  userSubscription(): void {
    this.users = this.userService.users$;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
