import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/user.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

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
    return this.http.get<UserModel>(`users/${id}`).pipe(tap((res) => this.setCurrentUser(res)));
  }

  addUser(user): Observable<UserModel> {
    return this.http.post<UserModel>('users', user);
  }

  updateUser(user, id): Observable<object> {
    return this.http.patch(`users/${id}`, user).pipe(tap(() => this.setCurrentUser(user)));
  }

  setCurrentUser(user: UserModel): void {
    this.currentUserSub.next(user);
  }
}