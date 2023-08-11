import { TestBed } from '@angular/core/testing';

import { RestfullApiService } from './restfull-api.service';

describe('RestfullApiService', () => {
  let service: RestfullApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestfullApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
