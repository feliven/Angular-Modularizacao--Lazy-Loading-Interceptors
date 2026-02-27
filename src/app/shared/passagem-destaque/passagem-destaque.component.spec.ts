import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemDestaqueComponent } from './passagem-destaque.component';

describe('PassagemDestaqueComponent', () => {
  let component: PassagemDestaqueComponent;
  let fixture: ComponentFixture<PassagemDestaqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PassagemDestaqueComponent],
    });
    fixture = TestBed.createComponent(PassagemDestaqueComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
