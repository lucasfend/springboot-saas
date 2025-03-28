import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertElementFrstComponent } from './insert-element-frst.component';

describe('InsertElementFrstComponent', () => {
  let component: InsertElementFrstComponent;
  let fixture: ComponentFixture<InsertElementFrstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertElementFrstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertElementFrstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
