import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsNavComponent } from './settings-nav.component';

describe('SettingsNavComponent', () => {
  let component: SettingsNavComponent;
  let fixture: ComponentFixture<SettingsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
