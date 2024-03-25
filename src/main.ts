import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HoneycombWebSDK } from '@honeycombio/opentelemetry-web';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';

const sdk = new HoneycombWebSDK({
  apiKey: 'YOUR_KEY_HERE',
  serviceName: 'my-angular-app',
  instrumentations: [getWebAutoInstrumentations()], // add auto-instrumentation
});
sdk.start();

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
