import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TworkerPageComponent } from './tworker-page.component';

describe('TworkerPageComponent', () => {
  let component: TworkerPageComponent;
  let fixture: ComponentFixture<TworkerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TworkerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TworkerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
