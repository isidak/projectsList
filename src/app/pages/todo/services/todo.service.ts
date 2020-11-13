import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToDoItemModel} from '../models/to-do-item.model';
import {map, switchMap, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tasksListArray = new BehaviorSubject<ToDoItemModel[]>([]);

  tasksListArray$ = this.tasksListArray.asObservable();

  constructor(private http: HttpClient) {
  }

  getList(): Observable<ToDoItemModel[]> {
    return this.http.get<ToDoItemModel[]>('tasks').pipe(
      tap((res) => {
        this.tasksListArray.next(res);
      })
    );
  }

  addItem(task): Observable<ToDoItemModel> {
    return this.http.post<ToDoItemModel>('tasks', task);
  }

  deleteItem(id): Observable<ToDoItemModel[]> {
    return this.http.delete<ToDoItemModel>(`tasks/${id}`).pipe(
      switchMap(() => this.tasksListArray$),
      map( (res) => {
        const newList = res.filter((task) => task.id !== id);
        this.tasksListArray.next(newList);
        return newList;
      })
    );
  }
}
