import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParkPieChartComponent } from './park-pie-chart.component';

describe('ParkPieChartComponent', () => {
  let component: ParkPieChartComponent;
  let fixture: ComponentFixture<ParkPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkPieChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParkPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
