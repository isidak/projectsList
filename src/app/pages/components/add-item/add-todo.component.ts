import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  @Output() taskAdded = new EventEmitter();

  todoForm: FormGroup;

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
    if (this.todoForm.valid) {
      this.todoService.addItem(this.todoForm.value).subscribe(() => this.taskAdded.emit());
      this.todoForm.reset();
    }
  }


}
