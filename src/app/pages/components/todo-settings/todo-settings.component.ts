import {Component, OnInit} from '@angular/core';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-settings',
  templateUrl: './todo-settings.component.html',
  styleUrls: ['./todo-settings.component.css']
})
export class TodoSettingsComponent extends TodoListComponent implements OnInit {

  constructor(public todoService: TodoService) {
    super(todoService);
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

  delete(id) {
    this.todoList = this.todoList.filter((task) => task.id !== id);
  }

}
