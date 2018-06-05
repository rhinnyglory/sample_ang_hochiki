import { TestBed, inject } from '@angular/core/testing';

import { FeedbckService } from './feedbck.service';

describe('FeedbckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedbckService]
    });
  });

  it('should be created', inject([FeedbckService], (service: FeedbckService) => {
    expect(service).toBeTruthy();
  }));
});
