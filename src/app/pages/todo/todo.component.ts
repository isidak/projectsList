import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  OnDestroy,
  OnInit,
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

  @ViewChild('dynamicContainer', {read: ViewContainerRef}) container;

  componentRef: ComponentRef<any>;
  toDoListArray: ToDoItemModel[] = [];

  private subscriptions = new Subscription();

  constructor(private resolver: ComponentFactoryResolver,
              private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getList();
    this.getListSub();
  }

  createComponent(componentName): void {
    switch (componentName) {
      case 'list':
        this.createListComponent();
        break;
      case 'add':
        this.createAddItemComponent();
        break;
      case 'settings':
        this.createSettingsComponent();
        break;
      default:
        break;
    }

  }

  createListComponent(): void {
    this.container.clear();
    const factory: ComponentFactory<TodoListComponent> = this.resolver.resolveComponentFactory(TodoListComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.todoList = this.toDoListArray;
  }

  createAddItemComponent(): void {
    this.container.clear();
    const factory: ComponentFactory<AddTodoComponent> = this.resolver.resolveComponentFactory(AddTodoComponent);
    this.componentRef = this.container.createComponent(factory);
    const addTaskSub = this.componentRef.instance.taskAdded.subscribe(() => this.getList());
    this.subscriptions.add(addTaskSub);
  }

  createSettingsComponent(): void {
    this.container.clear();
    const factory: ComponentFactory<TodoSettingsComponent> = this.resolver.resolveComponentFactory(TodoSettingsComponent);
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.todoList = this.toDoListArray;
  }

  getList(): void {
    const listSub = this.todoService.getList().subscribe();
    this.subscriptions.add(listSub);

  }

  getListSub(): void {
    const todoListSub = this.todoService.tasksListArray$.subscribe((res) => this.toDoListArray = res);
    this.subscriptions.add(todoListSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


}
