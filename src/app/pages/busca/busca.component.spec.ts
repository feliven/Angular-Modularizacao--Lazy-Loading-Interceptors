import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaComponent } from './busca.component';

describe('BuscaComponent', () => {
  let component: BuscaComponent;
  let fixture: ComponentFixture<BuscaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BuscaComponent],
    });
    fixture = TestBed.createComponent(BuscaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
