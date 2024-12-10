import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSuperagentComponent } from './add-superagent.component';

describe('AddSuperagentComponent', () => {
  let component: AddSuperagentComponent;
  let fixture: ComponentFixture<AddSuperagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSuperagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSuperagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
