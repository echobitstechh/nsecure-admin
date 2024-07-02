import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAndSupportComponent } from './contact-and-support.component';

describe('ContactAndSupportComponent', () => {
  let component: ContactAndSupportComponent;
  let fixture: ComponentFixture<ContactAndSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactAndSupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactAndSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
