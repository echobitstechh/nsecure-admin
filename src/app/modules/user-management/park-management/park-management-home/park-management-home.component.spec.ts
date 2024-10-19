import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkManagementHomeComponent } from './park-management-home.component';

describe('ParkManagementHomeComponent', () => {
  let component: ParkManagementHomeComponent;
  let fixture: ComponentFixture<ParkManagementHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkManagementHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParkManagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
