import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToDoItemModel} from '../models/to-do-item.model';
import {tap} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  taskList: ToDoItemModel[];

  private tasksListArray = new BehaviorSubject<ToDoItemModel[]>(null);
  tasksListArray$ = this.tasksListArray.asObservable();

  constructor(private http: HttpClient) {
  }

  getTodoList() {
    return this.http.get<ToDoItemModel[]>('http://localhost:3000/tasks').pipe(
      tap((res) => {
        this.taskList = [...res];
        this.tasksListArray.next([...this.taskList]);
      })
    );
  }

  addTodo(task) {
    return this.http.post('http://localhost:3000/tasks', task);
      // .pipe(
      // tap((res) => {
      //   this.getTodoList();
      // })
    // );
  }

  deleteTodo(id) {
    return this.http.delete('http://localhost:3000/tasks' + `/${id}`).pipe(
      tap(() => {
          this.taskList.filter((task) => task.id !== id);
          this.tasksListArray.next([...this.taskList]);
        }
      )
    );
  }
}
