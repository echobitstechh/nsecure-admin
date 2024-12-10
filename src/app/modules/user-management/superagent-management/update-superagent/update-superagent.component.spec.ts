import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuperagentComponent } from './update-superagent.component';

describe('UpdateSuperagentComponent', () => {
  let component: UpdateSuperagentComponent;
  let fixture: ComponentFixture<UpdateSuperagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSuperagentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateSuperagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
