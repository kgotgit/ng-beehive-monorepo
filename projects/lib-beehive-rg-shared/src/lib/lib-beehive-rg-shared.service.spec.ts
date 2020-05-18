import { TestBed } from '@angular/core/testing';

import { LibBeehiveRGSharedService } from './lib-beehive-rg-shared.service';

describe('LibBeehiveRGSharedService', () => {
  let service: LibBeehiveRGSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibBeehiveRGSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
