import {Component} from '@angular/core';
import {ToDoItemModel} from '../../models/to-do-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent{
  todoList: ToDoItemModel[];
}
