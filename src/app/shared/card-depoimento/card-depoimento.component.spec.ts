import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { CardDepoimentoComponent } from './card-depoimento.component';

describe('CardDepoimentoComponent', () => {
  let component: CardDepoimentoComponent;
  let fixture: ComponentFixture<CardDepoimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardDepoimentoComponent],
      providers: [provideZonelessChangeDetection()]
    });
    fixture = TestBed.createComponent(CardDepoimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
