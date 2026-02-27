import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemComponent } from './passagem.component';

describe('PassagemComponent', () => {
  let component: PassagemComponent;
  let fixture: ComponentFixture<PassagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PassagemComponent],
    });
    fixture = TestBed.createComponent(PassagemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
