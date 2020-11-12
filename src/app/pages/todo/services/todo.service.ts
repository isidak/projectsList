import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToDoItemModel} from '../models/to-do-item.model';
import {switchMap, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  taskList: ToDoItemModel[];

  private tasksListArray = new BehaviorSubject<ToDoItemModel[]>([]);

  tasksListArray$ = this.tasksListArray.asObservable();

  constructor(private http: HttpClient) {
  }

  getList(): Observable<ToDoItemModel[]> {
    return this.http.get<ToDoItemModel[]>('tasks').pipe(
      tap((res) => {
        this.taskList = res;
        this.tasksListArray.next(res);
      })
    );
  }

  addItem(task): Observable<ToDoItemModel> {
    return this.http.post<ToDoItemModel>('tasks', task);
  }

  deleteItem(id): Observable<ToDoItemModel> {
    return this.http.delete<ToDoItemModel>(`tasks/${id}`).pipe(
      tap((res) => {
          this.taskList = this.taskList.filter((task) => task.id !== id);
          this.tasksListArray.next(this.taskList);
        }
      ),
      // switchMap(() => this.getList())
    );
  }
}
