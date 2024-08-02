import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingNavComponent } from './reporting-nav.component';

describe('SettingsNavComponent', () => {
  let component: ReportingNavComponent;
  let fixture: ComponentFixture<ReportingNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportingNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportingNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
