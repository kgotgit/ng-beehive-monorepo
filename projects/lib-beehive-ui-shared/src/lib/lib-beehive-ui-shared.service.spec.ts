import { TestBed } from '@angular/core/testing';

import { LibBeehiveUISharedService } from './lib-beehive-ui-shared.service';

describe('LibBeehiveUISharedService', () => {
  let service: LibBeehiveUISharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibBeehiveUISharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
