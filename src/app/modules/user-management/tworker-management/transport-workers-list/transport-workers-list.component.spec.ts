import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransportWorkersListComponent } from './transport-workers-list.component';

describe('ServicesComponent', () => {
  let component: TransportWorkersListComponent;
  let fixture: ComponentFixture<TransportWorkersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportWorkersListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransportWorkersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
