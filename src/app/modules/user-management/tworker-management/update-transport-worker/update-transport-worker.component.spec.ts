import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTransportWorkerComponent } from './update-transport-worker.component';

describe('UpdateTransportWorkerComponent', () => {
  let component: UpdateTransportWorkerComponent;
  let fixture: ComponentFixture<UpdateTransportWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTransportWorkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTransportWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
