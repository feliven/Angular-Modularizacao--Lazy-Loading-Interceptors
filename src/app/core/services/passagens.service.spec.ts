import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { PassagensService } from './passagens.service';

describe('PassagensService', () => {
  let service: PassagensService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(PassagensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
