import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { CompanhiaService } from './companhia.service';

describe('CompanhiaService', () => {
  let service: CompanhiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(CompanhiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
