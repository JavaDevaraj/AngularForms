import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactFormCustomValidationComponent } from './react-form-custom-validation.component';

describe('ReactFormCustomValidationComponent', () => {
  let component: ReactFormCustomValidationComponent;
  let fixture: ComponentFixture<ReactFormCustomValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactFormCustomValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactFormCustomValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
