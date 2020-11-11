import {Component, Input} from '@angular/core';
import {BaseTodoItemComponent} from '../base-todo-item/base-todo-item.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent extends BaseTodoItemComponent {
  @Input() showDetails: boolean;
}
