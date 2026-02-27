import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecosComponent } from './precos.component';

describe('PrecosComponent', () => {
  let component: PrecosComponent;
  let fixture: ComponentFixture<PrecosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PrecosComponent],
    });
    fixture = TestBed.createComponent(PrecosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
