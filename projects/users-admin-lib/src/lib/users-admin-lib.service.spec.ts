import { TestBed } from '@angular/core/testing';

import { UsersAdminLibService } from './users-admin-lib.service';

describe('UsersAdminLibService', () => {
  let service: UsersAdminLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersAdminLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
