import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TodoRoutingModule} from './todo-routing.module';
import {TodoComponent} from './todo.component';
import {AddTodoComponent} from './components/add-item/add-todo.component';
import {BaseTodoItemComponent} from './components/base-item/base-todo-item.component';
import {TodoItemComponent} from './components/item/todo-item.component';
import {TodoListComponent} from './components/list/todo-list.component';
import {TodoSettingsComponent} from './components/settings/todo-settings.component';
import {TodoDoneItemComponent} from './components/done-item/todo-done-item.component';
import {NavButtonsComponent} from './components/nav-buttons/nav-buttons.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PaginationModule} from './components/pagination/pagination.module';


@NgModule({
  declarations: [TodoComponent,
    AddTodoComponent,
    BaseTodoItemComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoSettingsComponent,
    TodoDoneItemComponent,
    NavButtonsComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    PaginationModule
  ]
})
export class TodoModule {
}
