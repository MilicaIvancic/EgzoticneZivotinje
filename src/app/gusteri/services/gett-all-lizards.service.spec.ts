import { TestBed } from '@angular/core/testing';

import { GettAllLizardsService } from './gett-all-lizards.service';

describe('GettAllLizardsService', () => {
  let service: GettAllLizardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettAllLizardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
