import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockElementFrstComponent } from './stock-element-frst.component';

describe('StockElementFrstComponent', () => {
  let component: StockElementFrstComponent;
  let fixture: ComponentFixture<StockElementFrstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockElementFrstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockElementFrstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
