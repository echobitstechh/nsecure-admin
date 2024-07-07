import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCardOneComponent } from './analytics-card-one.component';

describe('AnalyticsCardOneComponent', () => {
  let component: AnalyticsCardOneComponent;
  let fixture: ComponentFixture<AnalyticsCardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyticsCardOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyticsCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
