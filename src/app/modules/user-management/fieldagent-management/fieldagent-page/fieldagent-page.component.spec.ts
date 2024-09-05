import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldagentPageComponent } from './fieldagent-page.component';

describe('FieldagentPageComponent', () => {
  let component: FieldagentPageComponent;
  let fixture: ComponentFixture<FieldagentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldagentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldagentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
