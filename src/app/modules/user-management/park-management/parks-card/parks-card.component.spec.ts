import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParksCardComponent } from './parks-card.component';

describe('DashboardCardComponent', () => {
  let component: ParksCardComponent;
  let fixture: ComponentFixture<ParksCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParksCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
