import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoControleComponent } from './botao-controle.component';

describe('BotaoControleComponent', () => {
  let component: BotaoControleComponent;
  let fixture: ComponentFixture<BotaoControleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BotaoControleComponent],
    });
    fixture = TestBed.createComponent(BotaoControleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
