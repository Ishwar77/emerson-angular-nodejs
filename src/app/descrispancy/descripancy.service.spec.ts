import { TestBed } from '@angular/core/testing';

import { DescripancyService } from './descripancy.service';

describe('DescripancyService', () => {
  let service: DescripancyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescripancyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
