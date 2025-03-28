import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertElementScndComponent } from './insert-element-scnd.component';

describe('InsertElementScndComponent', () => {
  let component: InsertElementScndComponent;
  let fixture: ComponentFixture<InsertElementScndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertElementScndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertElementScndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
