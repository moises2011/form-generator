import { TestBed } from '@angular/core/testing';

import { ControlValidationsService } from './control-validations.service';

describe('CustomValidationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlValidationsService = TestBed.get(ControlValidationsService);
    expect(service).toBeTruthy();
  });
});
