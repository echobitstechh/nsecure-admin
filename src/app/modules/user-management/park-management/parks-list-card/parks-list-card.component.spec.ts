import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParksListCardComponent } from './parks-list-card.component';

describe('EnumeratorListCardComponent', () => {
  let component: ParksListCardComponent;
  let fixture: ComponentFixture<ParksListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParksListCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ParksListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
