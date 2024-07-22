import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCardTwoComponent } from './analytics-card-two.component';

describe('AnalyticsCardTwoComponent', () => {
  let component: AnalyticsCardTwoComponent;
  let fixture: ComponentFixture<AnalyticsCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsCardTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyticsCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
