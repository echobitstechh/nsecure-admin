import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldagentFormComponent } from './fieldagent-form.component';

describe('AdminFormComponent', () => {
  let component: FieldagentFormComponent;
  let fixture: ComponentFixture<FieldagentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldagentFormComponent],
    }).compileComponents();
    
    fixture = TestBed.createComponent(FieldagentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
