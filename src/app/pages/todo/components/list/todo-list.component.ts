import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToDoItemModel} from '../../models/to-do-item.model';
import {Observable, Subscription} from 'rxjs';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit, OnDestroy {

  todoList$: Observable<ToDoItemModel[]>;
  taskListLength$: Observable<number>;
  private subscriptions = new Subscription();
  currentPage = 1;
  currentLimit: number;

  constructor(public todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getPageLimit();
    this.getListLength();
    this.getListByPages(this.currentPage, this.currentLimit);
    this.todoList$ = this.todoService.tasksListArray$;
  }

  getPageLimit(): void {
    this.currentLimit = this.todoService.getPageLimit();
  }

  getListLength(): void {
    this.taskListLength$ = this.todoService.tasksListLength$;
  }

  getListByPages(page, limit): void {
    const listSub = this.todoService.getListPage(page, limit).subscribe();
    this.subscriptions.add(listSub);

  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
