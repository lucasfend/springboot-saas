import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockElementScndComponent } from './stock-element-scnd.component';

describe('StockElementScndComponent', () => {
  let component: StockElementScndComponent;
  let fixture: ComponentFixture<StockElementScndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockElementScndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockElementScndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
