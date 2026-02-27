import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletorPassageiroComponent } from './seletor-passageiro.component';

describe('SeletorPassageiroComponent', () => {
  let component: SeletorPassageiroComponent;
  let fixture: ComponentFixture<SeletorPassageiroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SeletorPassageiroComponent],
      providers: [provideZonelessChangeDetection()],
    });
    fixture = TestBed.createComponent(SeletorPassageiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
