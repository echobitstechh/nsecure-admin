import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxChartCardComponent } from './tax-chart-card.component';

describe('TaxChartCardComponent', () => {
  let component: TaxChartCardComponent;
  let fixture: ComponentFixture<TaxChartCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxChartCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxChartCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
