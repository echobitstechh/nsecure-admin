import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkmanagementPageComponent } from './parkmanagement-page.component';

describe('ParkmanagementPageComponent', () => {
  let component: ParkmanagementPageComponent;
  let fixture: ComponentFixture<ParkmanagementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkmanagementPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParkmanagementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
