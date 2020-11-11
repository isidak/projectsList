import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ToDoItemModel} from '../../models/to-do-item.model';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.css']
})
export class NavButtonsComponent {

  @Input() toDoListArray: ToDoItemModel[];
  @Output() openComponent = new EventEmitter();

  createComponent(componentName): void {
    this.openComponent.emit(componentName);
  }
}
