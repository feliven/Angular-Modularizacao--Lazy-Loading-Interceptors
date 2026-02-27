import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBaseComponent } from './form-base.component';

describe('FormBaseComponent', () => {
  let component: FormBaseComponent;
  let fixture: ComponentFixture<FormBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormBaseComponent],
    });
    fixture = TestBed.createComponent(FormBaseComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
