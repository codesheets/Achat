import { TestBed } from '@angular/core/testing';

import { MonserviceService } from './monservice.service';

describe('MonserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonserviceService = TestBed.get(MonserviceService);
    expect(service).toBeTruthy();
  });
});
