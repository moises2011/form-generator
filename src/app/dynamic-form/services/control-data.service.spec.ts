import { TestBed } from '@angular/core/testing';

import { ControlDataService } from './control-data.service';

describe('ExternalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlDataService = TestBed.get(ControlDataService);
    expect(service).toBeTruthy();
  });
});
