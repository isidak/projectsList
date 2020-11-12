import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToDoItemModel} from '../../models/to-do-item.model';
import {TodoService} from '../../services/todo.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.css']
})
export class NavButtonsComponent implements OnInit {

  toDoListArray: Observable<ToDoItemModel[]>;
  @Output() openComponent = new EventEmitter();

  constructor(private todoService: TodoService){

  }

  ngOnInit(): void {
    this.toDoListArray = this.todoService.tasksListArray$;
  }

  createComponent(componentName): void {
    this.openComponent.emit(componentName);
  }
}
