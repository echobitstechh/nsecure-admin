import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationToggleComponent } from './notification-toggle.component';

describe('NotificationToggleComponent', () => {
  let component: NotificationToggleComponent;
  let fixture: ComponentFixture<NotificationToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationToggleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotificationToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
