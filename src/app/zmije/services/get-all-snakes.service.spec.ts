import { TestBed } from '@angular/core/testing';

import { GetAllSnakesService } from './get-all-snakes.service';

describe('GetAllSnakesService', () => {
  let service: GetAllSnakesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllSnakesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
