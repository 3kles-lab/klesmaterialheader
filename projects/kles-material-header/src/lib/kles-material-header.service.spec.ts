import { TestBed } from '@angular/core/testing';

import { KlesHeaderService } from './kles-header.service';

describe('KlesHeaderService', () => {
  let service: KlesHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KlesHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
