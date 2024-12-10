import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParksFieldAgentsComponent } from './parks-field-agents.component';

describe('ParksFieldAgentsComponent', () => {
  let component: ParksFieldAgentsComponent;
  let fixture: ComponentFixture<ParksFieldAgentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParksFieldAgentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParksFieldAgentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
