import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFieldagentComponent } from './update-fieldagent.component';

describe('UpdateAdminComponent', () => {
  let component: UpdateFieldagentComponent;
  let fixture: ComponentFixture<UpdateFieldagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateFieldagentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateFieldagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
