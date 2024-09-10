import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentReportComponent } from './payment-report.component';

describe('PaymentReportComponent', () => {
  let component: PaymentReportComponent;
  let fixture: ComponentFixture<PaymentReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
