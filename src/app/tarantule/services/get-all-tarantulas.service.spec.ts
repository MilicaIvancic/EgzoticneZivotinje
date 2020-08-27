import { TestBed } from '@angular/core/testing';

import { GetAllTarantulasService } from './get-all-tarantulas.service';

describe('GetAllTarantulasService', () => {
  let service: GetAllTarantulasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllTarantulasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
