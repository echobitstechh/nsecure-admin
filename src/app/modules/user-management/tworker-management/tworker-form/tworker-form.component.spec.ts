import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TworkerFormComponent } from './tworker-form.component';

describe('AdminFormComponent', () => {
  let component: TworkerFormComponent;
  let fixture: ComponentFixture<TworkerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TworkerFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TworkerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
