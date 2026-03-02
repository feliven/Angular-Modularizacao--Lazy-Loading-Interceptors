import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.showLoading();

  return next(req).pipe(
    finalize(() => {
      loadingService.hideLoading();
    }),
  );
};

// sintaxe antiga:

// constructor(private loadingService: LoadingService) {}

// intercept(
//   request: HttpRequest<any>,
//   next: HttpHandler
// ): Observable<HttpEvent<any>> {
//   this.loadingService.showLoading();
//   return next.handle(request).pipe(
//     finalize(() => {
//       this.loadingService.hideLoading();
//     })
//   );
// }
