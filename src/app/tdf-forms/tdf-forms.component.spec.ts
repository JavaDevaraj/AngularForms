import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfFormsComponent } from './tdf-forms.component';

describe('TdfFormsComponent', () => {
  let component: TdfFormsComponent;
  let fixture: ComponentFixture<TdfFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
