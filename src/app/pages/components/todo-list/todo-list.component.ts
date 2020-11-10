import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ToDoItemModel} from '../../models/to-do-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: ToDoItemModel[];

  constructor(public todoService: TodoService) {
  }

  ngOnInit(): void {
  }

}
