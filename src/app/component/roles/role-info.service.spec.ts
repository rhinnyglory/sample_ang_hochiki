import { TestBed, inject } from '@angular/core/testing';

import { RoleInfoService } from './role-info.service';

describe('RoleInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleInfoService]
    });
  });

  it('should be created', inject([RoleInfoService], (service: RoleInfoService) => {
    expect(service).toBeTruthy();
  }));
});
