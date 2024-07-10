import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransportWorkersDashboardComponent } from './transport-workers-dashboard.component';

describe('ServicesComponent', () => {
  let component: TransportWorkersDashboardComponent;
  let fixture: ComponentFixture<TransportWorkersDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportWorkersDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransportWorkersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
