import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import {AddTodoComponent} from '../components/add-todo/add-todo.component';
import {BaseTodoItemComponent} from '../components/base-todo-item/base-todo-item.component';
import {TodoItemComponent} from '../components/todo-item/todo-item.component';
import {TodoListComponent} from '../components/todo-list/todo-list.component';
import {TodoSettingsComponent} from '../components/todo-settings/todo-settings.component';
import {TodoDoneItemComponent} from '../components/todo-done-item/todo-done-item.component';
import {NavButtonsComponent} from '../components/nav-buttons/nav-buttons.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [TodoComponent,
    AddTodoComponent,
    BaseTodoItemComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoSettingsComponent,
    TodoDoneItemComponent,
    NavButtonsComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,

  ]
})
export class TodoModule { }
