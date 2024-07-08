import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxProgressCardComponent } from './tax-progress-card.component';

describe('TaxProgressCardComponent', () => {
  let component: TaxProgressCardComponent;
  let fixture: ComponentFixture<TaxProgressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxProgressCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxProgressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
