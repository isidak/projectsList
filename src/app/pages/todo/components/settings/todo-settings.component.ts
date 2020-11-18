import {Component, ViewChild} from '@angular/core';
import {TodoListComponent} from '../list/todo-list.component';
import {state, style, transition, trigger, useAnimation} from '@angular/animations';
import {TodoService} from '../../services/todo.service';
import {transAnimation} from '../../animations/animations';
import {PaginationComponent} from '../pagination/pagination.component';

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
  @ViewChild('pagination') pagination: PaginationComponent;

  constructor(public todoService: TodoService) {
    super(todoService);
  }

  changePagination(): void {
    this.pagination.itemDeleted();
  }

}
