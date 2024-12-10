import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperagentFormComponent } from './superagent-form.component';

describe('AdminFormComponent', () => {
  let component: SuperagentFormComponent;
  let fixture: ComponentFixture<SuperagentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperagentFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuperagentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
