import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperagentListComponent } from './superagent-list.component';

describe('FieldagentPageComponent', () => {
  let component: SuperagentListComponent;
  let fixture: ComponentFixture<SuperagentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperagentListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuperagentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
