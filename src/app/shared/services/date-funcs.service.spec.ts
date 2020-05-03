import { TestBed } from '@angular/core/testing';

import { DateFuncsService } from './date-funcs.service';

describe('DateFuncsService', () => {
  let service: DateFuncsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateFuncsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
