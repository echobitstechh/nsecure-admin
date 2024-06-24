import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarLoaderComponent } from './progress-bar-loader.component';

describe('ProgressBarLoaderComponent', () => {
  let component: ProgressBarLoaderComponent;
  let fixture: ComponentFixture<ProgressBarLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressBarLoaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgressBarLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
