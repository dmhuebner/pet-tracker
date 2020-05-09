import { TestBed } from '@angular/core/testing';

import { VetsDataService } from './vets-data.service';

describe('VetsDataService', () => {
  let service: VetsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
