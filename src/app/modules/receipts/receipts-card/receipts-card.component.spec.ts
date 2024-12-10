import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptsCardComponent } from './receipts-card.component';

describe('ReceiptsCardComponent', () => {
  let component: ReceiptsCardComponent;
  let fixture: ComponentFixture<ReceiptsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiptsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
