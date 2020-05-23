import { TestBed } from '@angular/core/testing';

import { VetsStateService } from './vets-state.service';

describe('VetsStateService', () => {
  let service: VetsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
