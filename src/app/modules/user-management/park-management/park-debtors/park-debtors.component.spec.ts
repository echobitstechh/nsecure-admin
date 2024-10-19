import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkDebtorsComponent } from './park-debtors.component';

describe('ParkDebtorsComponent', () => {
  let component: ParkDebtorsComponent;
  let fixture: ComponentFixture<ParkDebtorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkDebtorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParkDebtorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
