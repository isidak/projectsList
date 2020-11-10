import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTodoComponent } from './pages/components/add-todo/add-todo.component';
import { BaseTodoItemComponent } from './pages/components/base-todo-item/base-todo-item.component';
import { TodoItemComponent } from './pages/components/todo-item/todo-item.component';
import { TodoListComponent } from './pages/components/todo-list/todo-list.component';
import { TodoSettingsComponent } from './pages/components/todo-settings/todo-settings.component';
import { TodoDoneItemComponent } from './pages/components/todo-done-item/todo-done-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    BaseTodoItemComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoSettingsComponent,
    TodoDoneItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
