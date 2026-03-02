import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MensagemSnackbarService {
  private _snackBar = inject(MatSnackBar);

  exibirMensagemSnackBar(mensagem: string, acao: string) {
    this._snackBar.open(mensagem, acao, {
      duration: 10000,
    });
  }
}
