import {Component, Input} from '@angular/core';
import {ToDoItemModel} from '../../models/to-do-item.model';

@Component({
  selector: 'app-base-todo-item',
  templateUrl: './base-todo-item.component.html',
  styleUrls: ['./base-todo-item.component.css']
})
export class BaseTodoItemComponent {
  @Input() task: ToDoItemModel;
  @Input() index: number;
}
