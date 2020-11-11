import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToDoItemModel} from '../models/to-do-item.model';
import {tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  taskList: ToDoItemModel[];
  baseUrl = environment.baseUrl;

  private tasksListArray = new BehaviorSubject<ToDoItemModel[]>(null);

  tasksListArray$ = this.tasksListArray.asObservable();

  constructor(private http: HttpClient) {
  }

  getList(): Observable<ToDoItemModel[]> {
    return this.http.get<ToDoItemModel[]>(this.baseUrl + 'tasks').pipe(
      tap((res) => {
        this.taskList = res;
        this.tasksListArray.next(this.taskList);
      })
    );
  }

  addItem(task): Observable<object> {
    return this.http.post(this.baseUrl + 'tasks', task);
  }

  deleteItem(id): Observable<object> {
    return this.http.delete(this.baseUrl + `tasks/${id}`).pipe(
      tap(() => {
          this.taskList = this.taskList.filter((task) => task.id !== id);
          this.tasksListArray.next(this.taskList);
        }
      )
    );
  }
}
