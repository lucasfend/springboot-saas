import { TestBed } from '@angular/core/testing';

import { StockSecondService } from './stock-second.service';

describe('StockSecondService', () => {
  let service: StockSecondService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockSecondService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
