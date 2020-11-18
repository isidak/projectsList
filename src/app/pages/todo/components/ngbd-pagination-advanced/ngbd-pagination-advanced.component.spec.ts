import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdPaginationAdvancedComponent } from './ngbd-pagination-advanced.component';

describe('NgbdPaginationAdvancedComponent', () => {
  let component: NgbdPaginationAdvancedComponent;
  let fixture: ComponentFixture<NgbdPaginationAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdPaginationAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdPaginationAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
