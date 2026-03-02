import { TestBed } from '@angular/core/testing';

import { MensagemSnackbarService } from './mensagem-snackbar.service';

describe('MensagemSnackbarService', () => {
  let service: MensagemSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MensagemSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
