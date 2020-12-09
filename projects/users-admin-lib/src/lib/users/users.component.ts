import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {UserModel} from './models/user.model';
import {UsersService} from './services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  currentUser$: Observable<UserModel>;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.getCurrentUser();
  }

  getCurrentUser(): void {
    this.currentUser$ = this.usersService.currentUser$;
  }


}

