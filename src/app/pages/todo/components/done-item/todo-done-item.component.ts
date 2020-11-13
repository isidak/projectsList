import {Component, OnDestroy} from '@angular/core';
import {BaseTodoItemComponent} from '../base-item/base-todo-item.component';
import {TodoService} from '../../services/todo.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-todo-done-item',
  templateUrl: './todo-done-item.component.html',
  styleUrls: ['./todo-done-item.component.css']
})
export class TodoDoneItemComponent extends BaseTodoItemComponent implements OnDestroy {

  private subscriptions = new Subscription();

  constructor(private todoService: TodoService) {
    super();
  }

  deleteItem(id): void {
    const deleteSub = this.todoService.deleteItem(id).subscribe();
    this.subscriptions.add(deleteSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
