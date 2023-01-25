import { TestBed } from '@angular/core/testing';

import { WorkloadService } from './workload.service';

describe('WorkloadService', () => {
  let service: WorkloadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
