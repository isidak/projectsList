import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToDoItemModel} from '../models/to-do-item.model';
import {map, switchMap, take, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private pageLimit = 5;
  private tasksListArray = new BehaviorSubject<ToDoItemModel[]>([]);
  private tasksListLength = new BehaviorSubject<number>(null);

  tasksListArray$ = this.tasksListArray.asObservable();
  tasksListLength$ = this.tasksListLength.asObservable();

  constructor(private http: HttpClient) {
  }

  getPageLimit(): number{
    return this.pageLimit;
  }

  getList(): Observable<ToDoItemModel[]> {
    return this.http.get<ToDoItemModel[]>('tasks').pipe(
      tap((res) => {
        this.tasksListArray.next(res);
      })
    );
  }

  getListLength(): Observable<number> {
    return this.http.get<ToDoItemModel[]>('tasks').pipe(
      map((res) => res.length),
      tap((res) => this.tasksListLength.next(res)));
  }

  getListPage(page: number, limit: number): Observable<ToDoItemModel[]> {
    return this.http.get<ToDoItemModel[]>('tasks?_page=' + page + '&_limit=' + limit).pipe(
      tap((res) => {
        this.tasksListArray.next(res);
      })
    );
  }

  addItem(task): Observable<ToDoItemModel> {
    return this.http.post<ToDoItemModel>('tasks', task);
  }

  deleteItem(id): Observable<number> {
    return this.http.delete<ToDoItemModel>(`tasks/${id}`).pipe(
      switchMap(() => this.tasksListArray$),
      take(1),
      map((res) => this.deleteItemFromListArray(res, id)),
      switchMap(() => this.tasksListLength$),
      take(1),
      tap((res) => this.tasksListLength.next(+res - 1))
    );
  }

  deleteItemFromListArray(listArray, id): Observable<ToDoItemModel[]> {
    const newList = listArray.filter((task) => task.id !== id);
    this.tasksListArray.next(newList);
    return newList;
  }
}
