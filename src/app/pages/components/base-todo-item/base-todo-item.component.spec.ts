import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTodoItemComponent } from './base-todo-item.component';

describe('BaseTodoItemComponent', () => {
  let component: BaseTodoItemComponent;
  let fixture: ComponentFixture<BaseTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseTodoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
