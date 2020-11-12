import {Component, OnInit} from '@angular/core';
import {ToDoItemModel} from '../../models/to-do-item.model';
import {Observable} from 'rxjs';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList$: Observable<ToDoItemModel[]>;

  constructor(public todoService: TodoService) {
  }

  ngOnInit(): void {
    this.todoList$ = this.todoService.tasksListArray$;
  }
}
