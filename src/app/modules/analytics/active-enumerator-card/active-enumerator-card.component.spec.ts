import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveEnumeratorCardComponent } from './active-enumerator-card.component';

describe('ActiveEnumeratorCardComponent', () => {
  let component: ActiveEnumeratorCardComponent;
  let fixture: ComponentFixture<ActiveEnumeratorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveEnumeratorCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveEnumeratorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
