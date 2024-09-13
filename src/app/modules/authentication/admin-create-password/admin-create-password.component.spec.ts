import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatePasswordComponent } from './admin-create-password.component';

describe('AdminCreatePasswordComponent', () => {
  let component: AdminCreatePasswordComponent;
  let fixture: ComponentFixture<AdminCreatePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCreatePasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCreatePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
