import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../../services/todo.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit, OnDestroy {

  @Output() taskAdded = new EventEmitter();

  todoForm: FormGroup;
  private subscriptions = new Subscription();

  constructor(private fb: FormBuilder,
              private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  saveItem(): void {
    const addSub = this.todoService.addItem(this.todoForm.value).subscribe(() => {
      this.taskAdded.emit();
      this.todoForm.reset();
    });
    this.subscriptions.add(addSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


}
