import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperagentListsComponent } from './superagent-lists.component';

describe('SuperagentListsComponent', () => {
  let component: SuperagentListsComponent;
  let fixture: ComponentFixture<SuperagentListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperagentListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperagentListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
