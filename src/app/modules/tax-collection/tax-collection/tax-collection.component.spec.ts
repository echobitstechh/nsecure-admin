import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCollectionComponent } from './tax-collection.component';

describe('TaxCollectionComponent', () => {
  let component: TaxCollectionComponent;
  let fixture: ComponentFixture<TaxCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaxCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaxCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
