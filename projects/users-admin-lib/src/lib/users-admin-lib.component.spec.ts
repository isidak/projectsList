import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAdminLibComponent } from './users-admin-lib.component';

describe('UsersAdminLibComponent', () => {
  let component: UsersAdminLibComponent;
  let fixture: ComponentFixture<UsersAdminLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersAdminLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersAdminLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
