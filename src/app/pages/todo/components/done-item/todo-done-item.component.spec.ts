import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDoneItemComponent } from './todo-done-item.component';

describe('TodoDoneItemComponent', () => {
  let component: TodoDoneItemComponent;
  let fixture: ComponentFixture<TodoDoneItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDoneItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDoneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
