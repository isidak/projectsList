import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';
import {BaseUserModel} from '../models/base-user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersSub = new BehaviorSubject([]);
  private currentUserSub = new BehaviorSubject<UserModel>(null);

  users$ = this.usersSub.asObservable();
  currentUser$ = this.currentUserSub.asObservable();

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>('users').pipe(
      tap((res) => this.usersSub.next(res))
    );
  }

  getUser(id): Observable<UserModel> {
    return this.http.get(`users/${id}`).pipe(
      map((res) => plainToClass(UserModel, res)),
      tap((res) => this.setCurrentUser(res)));
  }

  addUser(user): Observable<BaseUserModel> {
    return this.http.post<BaseUserModel>('users', user);
  }

  updateUser(user, id): Observable<object> {
    return this.http.patch(`users/${id}`, user).pipe(tap(() => this.setCurrentUser(user)));
  }

  deleteUser(id): Observable<object> {
    return this.http.delete(`users/${id}`).pipe(
      switchMap(() => this.users$),
      take(1),
      map((res) => {
          this.usersSub.next(res.filter((user) => user.id !== id));
          return of([]);
        }
      )
    );
  }

  setCurrentUser(user: UserModel): void {
    this.currentUserSub.next(user);
  }
}
