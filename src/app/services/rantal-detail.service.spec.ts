import { TestBed } from '@angular/core/testing';
import { RentalDetailService } from './rantal-detail.service';

describe('RantalDetailService', () => {
  let service: RentalDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentalDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
