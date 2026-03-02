import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, throwError, of } from 'rxjs';
import { MensagemSnackbarService } from '../services/mensagem-snackbar.service';

export const errosInterceptor: HttpInterceptorFn = (req, next) => {
  const snackbarService = inject(MensagemSnackbarService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocorreu um erro desconhecido';
      let closeButtonMessage = 'Fechar';

      if (error.error instanceof ErrorEvent) {
        // significa que erro está no client
        errorMessage = `Erro no cliente: ${error.error.message}`;
        closeButtonMessage = 'Culpa minha??';
      }
      if (error.error instanceof ProgressEvent) {
        // significa que erro está no carregamento da requisição HTTP
        errorMessage = `Conexão RECUSADA`;
        closeButtonMessage = 'Não acredito...';
      } else if (error.status === 404) {
        errorMessage = `Recurso não encontrado: "${error.error.message}"`;
        closeButtonMessage = 'Poxa...';
      } else if (error.status === 500) {
        errorMessage = 'Erro interno do servidor';
        closeButtonMessage = 'Culpa SUA';
      } else if (error.status === 401) {
        errorMessage = 'Você não tem autorização para acessar este recurso';
        closeButtonMessage = 'Tenho SIM';
      }

      snackbarService.exibirMensagemSnackBar(errorMessage, closeButtonMessage);

      const msgErroConsole = JSON.stringify(
        {
          mensagem: error.message,
          tipo: error.error.constructor.name,
          nome: error.name,
        },
        null,
        2,
      );

      return throwError(() => new Error(msgErroConsole));
      // return of();
    }),
  );
};
