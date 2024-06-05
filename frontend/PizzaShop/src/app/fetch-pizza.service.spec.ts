import { TestBed } from '@angular/core/testing';

import { FetchPizzaService } from './fetch-pizza.service';

describe('FetchPizzaService', () => {
  let service: FetchPizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
