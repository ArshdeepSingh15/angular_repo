import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppDashboard } from './app/app';

bootstrapApplication(AppDashboard, appConfig)
  .catch((err) => console.error(err));
