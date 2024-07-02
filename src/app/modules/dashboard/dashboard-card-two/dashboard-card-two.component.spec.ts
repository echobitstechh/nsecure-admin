import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCardTwoComponent } from './dashboard-card-two.component';

describe('DashboardCardTwoComponent', () => {
  let component: DashboardCardTwoComponent;
  let fixture: ComponentFixture<DashboardCardTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardCardTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardCardTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
