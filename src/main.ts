import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

/*if (import.meta.env.PROD) {
  enableProdMode();
}*/

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
