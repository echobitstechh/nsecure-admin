import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParksRevenueComponent } from './parks-revenue.component';

describe('ParksRevenueComponent', () => {
  let component: ParksRevenueComponent;
  let fixture: ComponentFixture<ParksRevenueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParksRevenueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParksRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
