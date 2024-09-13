import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTransportWorkerComponent } from './add-transport-worker.component';

describe('AddTransportWorkerComponent', () => {
  let component: AddTransportWorkerComponent;
  let fixture: ComponentFixture<AddTransportWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTransportWorkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTransportWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
