import {Component} from '@angular/core';
import {TodoListComponent} from '../todo-list/todo-list.component';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-todo-settings',
  templateUrl: './todo-settings.component.html',
  styleUrls: ['./todo-settings.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      // transition('void => *', [
      //   style({ transform: 'translateX(-100%)' }),
      //   animate(500)
      // ]),
      transition('* => void', [
        animate(250, style({transform: 'translate(-100%, -100%)'}))
      ])
    ])
  ]
})
export class TodoSettingsComponent extends TodoListComponent {

  constructor() {
    super();
  }

  deleteItem(id): void {
    this.todoList = this.todoList.filter((task) => task.id !== id);
  }

}
