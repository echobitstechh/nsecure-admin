import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumeratorListCardComponent } from './enumerator-list-card.component';

describe('EnumeratorListCardComponent', () => {
  let component: EnumeratorListCardComponent;
  let fixture: ComponentFixture<EnumeratorListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnumeratorListCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnumeratorListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
