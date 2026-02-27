import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentosComponent } from './depoimentos.component';

describe('DepoimentosComponent', () => {
  let component: DepoimentosComponent;
  let fixture: ComponentFixture<DepoimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DepoimentosComponent],
    });
    fixture = TestBed.createComponent(DepoimentosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
