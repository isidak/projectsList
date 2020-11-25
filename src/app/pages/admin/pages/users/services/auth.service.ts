import {Injectable} from '@angular/core';
import {UsersService} from './users.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {BaseUserModel} from '../models/base-user.model';
import {map, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = new BehaviorSubject(null);

  constructor(private usersService: UsersService) { }

  login(email): Observable<BaseUserModel> {
    return this.usersService.getUsers().pipe(
      switchMap(() => this.usersService.users$),
      map((users) => users.find((user) => user.email === email)),
      tap((res) => this.currentUser.next(res))
    );
  }
}
