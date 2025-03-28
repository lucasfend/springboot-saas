import { TestBed } from '@angular/core/testing';

import { StockFirstService } from './stock-first.service';

describe('StockFirstService', () => {
  let service: StockFirstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockFirstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
