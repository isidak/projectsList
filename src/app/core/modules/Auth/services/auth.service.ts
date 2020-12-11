import {Injectable} from '@angular/core';
import {UsersService} from 'users-admin-lib';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = new BehaviorSubject(null);

  constructor(private usersService: UsersService) {
  }

  login(email): Observable<any> {
    return this.usersService.getUsers().pipe(
      switchMap(() => this.usersService.users$),
      map((users) => users.find((user) => user.email === email)),
      switchMap((res) => res ? of(res) : throwError('there is no such user')),
      tap((res) => this.currentUser.next(res))
    );
  }
}
