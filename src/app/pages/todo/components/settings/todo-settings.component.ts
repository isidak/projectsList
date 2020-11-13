import {Component} from '@angular/core';
import {TodoListComponent} from '../list/todo-list.component';
import {state, style, transition, trigger, useAnimation} from '@angular/animations';
import {TodoService} from '../../services/todo.service';
import {transAnimation} from '../../animations/animations';

@Component({
  selector: 'app-todo-settings',
  templateUrl: './todo-settings.component.html',
  styleUrls: ['./todo-settings.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0) scale(1)'
      })),
      transition('* => void', [
        useAnimation(transAnimation)
      ])
    ])
  ]
})


export class TodoSettingsComponent extends TodoListComponent {

  constructor(public todoService: TodoService) {
    super(todoService);
  }

}
