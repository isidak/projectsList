import {Component, Input, OnInit} from '@angular/core';
import {ToDoItemModel} from '../../models/to-do-item.model';

@Component({
  selector: 'app-base-todo-item',
  templateUrl: './base-todo-item.component.html',
  styleUrls: ['./base-todo-item.component.css']
})
export class BaseTodoItemComponent implements OnInit {
  @Input() task: ToDoItemModel;
  @Input() index: number;
  @Input() showDetails: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
