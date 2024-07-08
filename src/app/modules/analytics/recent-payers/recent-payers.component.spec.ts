import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPayersComponent } from './recent-payers.component';

describe('RecentPayersComponent', () => {
  let component: RecentPayersComponent;
  let fixture: ComponentFixture<RecentPayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentPayersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentPayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
