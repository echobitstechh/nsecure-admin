import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParksExpectedRevenueComponent } from './parks-expected-revenue.component';

describe('ParksExpectedRevenueComponent', () => {
  let component: ParksExpectedRevenueComponent;
  let fixture: ComponentFixture<ParksExpectedRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParksExpectedRevenueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParksExpectedRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
