import {Component} from '@angular/core';
import {TodoListComponent} from '../list/todo-list.component';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

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
        animate(1000, keyframes([
            style({
              transform: 'translateX(-25%) scale(0.75) rotate(360deg)',
              opacity: 0.5,
            }),
            style({
              transform: 'translateX(-50%) scale(0.25) rotate(620deg)',
              opacity: 0.5,
            }),
            style({
              transform: 'translateX(-100%) scale(0) rotate(900deg)',
              opacity: 0,
            })
          ]
        )),
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
