import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errosInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ocorreu um erro desconhecido';

      if (error.error instanceof ErrorEvent) {
        // significa que erro está no client
        errorMessage = `Erro no cliente: ${error.error.message}`;
      } else if (error.status === 404) {
        errorMessage = 'Recurso não encontrado';
      } else if (error.status === 500) {
        errorMessage = 'Erro interno do servidor';
      } else if (error.status === 401) {
        errorMessage = 'Você não está autorizado a acessar este recurso';
      }

      console.error(errorMessage);
      console.error(error);

      return throwError(() => new Error('ops'));
    }),
  );
};
