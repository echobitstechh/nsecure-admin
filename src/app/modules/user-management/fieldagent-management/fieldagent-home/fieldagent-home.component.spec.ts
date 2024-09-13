import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldagentHomeComponent } from './fieldagent-home.component';

describe('FieldagentHomeComponent', () => {
  let component: FieldagentHomeComponent;
  let fixture: ComponentFixture<FieldagentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldagentHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FieldagentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
