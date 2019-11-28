import { TestBed } from '@angular/core/testing';

import { ControlFieldService } from './control-field.service';

describe('ControlFieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlFieldService = TestBed.get(ControlFieldService);
    expect(service).toBeTruthy();
  });
});
