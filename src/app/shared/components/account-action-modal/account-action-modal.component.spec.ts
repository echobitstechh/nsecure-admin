import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountActionModalComponent } from './account-action-modal.component';

describe('AccountActionModalComponent', () => {
  let component: AccountActionModalComponent;
  let fixture: ComponentFixture<AccountActionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountActionModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountActionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
