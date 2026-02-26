import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideCheckNoChangesConfig,
  provideZoneChangeDetection,
  provideZonelessChangeDetection,
} from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routes from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideCheckNoChangesConfig({ exhaustive: true, interval: 1000 }),
  ],
});
