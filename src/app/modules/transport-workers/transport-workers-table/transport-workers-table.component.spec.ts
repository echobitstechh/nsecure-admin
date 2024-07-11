import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportWorkersTableComponent } from './transport-workers-table.component';

describe('TransportWorkersTableComponent', () => {
  let component: TransportWorkersTableComponent;
  let fixture: ComponentFixture<TransportWorkersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportWorkersTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransportWorkersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
