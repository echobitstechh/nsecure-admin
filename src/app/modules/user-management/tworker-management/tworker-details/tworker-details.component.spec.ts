import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldagentDetailsComponent } from './tworker-details.component';

describe('ManagementDetailsComponent', () => {
  let component: FieldagentDetailsComponent;
  let fixture: ComponentFixture<FieldagentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldagentDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FieldagentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
