import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  todoForm: FormGroup;
  @Output() taskAdded = new EventEmitter();

  constructor(private fb: FormBuilder,
              private todoService: TodoService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  saveTodo(){
    if (this.todoForm.valid){
      this.todoService.addTodo(this.todoForm.value).subscribe(res => this.taskAdded.emit());
      this.todoForm.reset();
    }
  }



}
