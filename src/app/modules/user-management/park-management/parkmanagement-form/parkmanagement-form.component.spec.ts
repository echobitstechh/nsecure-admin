import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParkmanagementFormComponent } from './parkmanagement-form.component';


describe('AdminFormComponent', () => {
  let component: ParkmanagementFormComponent;
  let fixture: ComponentFixture<ParkmanagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkmanagementFormComponent],
    }).compileComponents();
    
    fixture = TestBed.createComponent(ParkmanagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
