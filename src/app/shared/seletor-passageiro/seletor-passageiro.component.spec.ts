import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorPassageiroComponent } from './seletor-passageiro.component';

describe('SeletorPassageiroComponent', () => {
  let component: SeletorPassageiroComponent;
  let fixture: ComponentFixture<SeletorPassageiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SeletorPassageiroComponent],
    });
    fixture = TestBed.createComponent(SeletorPassageiroComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
