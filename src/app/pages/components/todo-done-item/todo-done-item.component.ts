import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BaseTodoItemComponent} from '../base-todo-item/base-todo-item.component';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-done-item',
  templateUrl: './todo-done-item.component.html',
  styleUrls: ['./todo-done-item.component.css']
})
export class TodoDoneItemComponent extends BaseTodoItemComponent implements OnInit {
  @Output() delete = new EventEmitter();

  constructor(private todoService: TodoService) {
    super();
  }

  ngOnInit() {

  }

  done(id) {
    this.todoService.deleteTodo(id).subscribe(() => this.delete.next());
  }
}
