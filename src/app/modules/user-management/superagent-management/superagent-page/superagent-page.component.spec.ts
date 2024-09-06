import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperagentPageComponent } from './superagent-page.component';

describe('SuperagentPageComponent', () => {
  let component: SuperagentPageComponent;
  let fixture: ComponentFixture<SuperagentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperagentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperagentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
