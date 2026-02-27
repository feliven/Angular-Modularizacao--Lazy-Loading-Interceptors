import { bootstrapApplication } from '@angular/platform-browser';
// import {
//   provideCheckNoChangesConfig,
//   provideZoneChangeDetection,
//   provideZonelessChangeDetection,
// } from '@angular/core';
import {
  provideCheckNoChangesConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routes from './app/app-routing.module';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AutenticacaoInterceptor } from './app/core/interceptors/autenticacao.interceptor';
import { errosInterceptor } from './app/core/erro/erros.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([errosInterceptor]),
      withInterceptorsFromDi(),
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacaoInterceptor,
      multi: true,
    },
    provideCheckNoChangesConfig({ exhaustive: true, interval: 1000 }),
  ],
});
