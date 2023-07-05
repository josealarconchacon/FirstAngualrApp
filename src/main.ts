/*
 *  Protractor support is deprecated in Angular.
 *  Protractor is used in this example for compatibility with Angular documentation tools.
 */

import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

import {
  bootstrapApplication,
  provideProtractorTestingSupport,
} from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)],
}).catch((err) => console.error(err));
