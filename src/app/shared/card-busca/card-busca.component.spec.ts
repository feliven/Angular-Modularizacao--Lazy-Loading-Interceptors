import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBuscaComponent } from './card-busca.component';

describe('CardBuscaComponent', () => {
  let component: CardBuscaComponent;
  let fixture: ComponentFixture<CardBuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardBuscaComponent],
    });
    fixture = TestBed.createComponent(CardBuscaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
