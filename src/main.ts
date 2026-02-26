import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZoneChangeDetection } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routes from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [provideZoneChangeDetection(), provideRouter(routes)],
});
