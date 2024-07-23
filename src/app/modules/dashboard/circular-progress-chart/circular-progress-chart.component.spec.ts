import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularProgressChartComponent } from './circular-progress-chart.component';

describe('CircularProgressChartComponent', () => {
  let component: CircularProgressChartComponent;
  let fixture: ComponentFixture<CircularProgressChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularProgressChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircularProgressChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
