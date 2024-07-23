import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditLogCardComponent } from './audit-log-card.component';

describe('AuditLogCardComponent', () => {
  let component: AuditLogCardComponent;
  let fixture: ComponentFixture<AuditLogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditLogCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuditLogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
