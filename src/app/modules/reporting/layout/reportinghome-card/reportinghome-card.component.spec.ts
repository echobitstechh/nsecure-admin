import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportinghomeCardComponent } from './reportinghome-card.component';

describe('ReportinghomeCardComponent', () => {
  let component: ReportinghomeCardComponent;
  let fixture: ComponentFixture<ReportinghomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportinghomeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportinghomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
