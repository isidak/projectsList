import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef, OnDestroy,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TodoSettingsComponent} from '../components/todo-settings/todo-settings.component';
import {TodoListComponent} from '../components/todo-list/todo-list.component';
import {AddTodoComponent} from '../components/add-todo/add-todo.component';
import {TodoService} from '../services/todo.service';
import {Subscription} from 'rxjs';
import {ToDoItemModel} from '../models/to-do-item.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {

  componentsArray: Type<any>[] = [TodoListComponent, AddTodoComponent, TodoSettingsComponent];
  @ViewChild('dynamicContainer', {read: ViewContainerRef}) container;
  componentRef: ComponentRef<any>;
  private subscriptions = new Subscription();
  toDoListArray: ToDoItemModel[] = [];
  // todoSettingsButtonDisabled = true;

  constructor(private resolver: ComponentFactoryResolver,
              private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodoList();
    this.getListSub();
  }

  createComponent(id){
    this.container.clear();
    const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(this.componentsArray[id]);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.todoList = this.toDoListArray;
    this.componentRef.instance.taskAdded?.subscribe((res) => this.getTodoList());
  }

  getTodoList() {
    this.todoService.getTodoList().subscribe();

  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getListSub() {
    const todoListSub = this.todoService.tasksListArray$.subscribe( (res) => this.toDoListArray = res);
    this.subscriptions.add(todoListSub);
  }
}
