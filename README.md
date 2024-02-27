# MyAngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Instrumenting for Honeycomb

### NOTE instrumentations package needs an update before it is usable with Angular

### Install Packages

<!--
```sh
npm install --save \
@honeycombio/opentelemetry-web \
@opentelemetry/auto-instrumentations-web
```
 -->

```sh
npm install --save @honeycombio/opentelemetry-web
```

### Get a Honeycomb API Key

[Get a Honeycomb API key](https://docs.honeycomb.io/quickstart/#create-a-honeycomb-account).

### Initialize Tracing

Initialize tracing at the start of your application by updating `main.ts`:

```js
import { HoneycombWebSDK } from '@honeycombio/opentelemetry-web';
import { getWebAutoInstrumentations } from '@opentelemetry/auto-instrumentations-web';

export function sdk() {
  const sdk = new HoneycombWebSDK({
    apiKey: 'YOUR_KEY_HERE',
    serviceName: 'my-angular-app',
    // instrumentations: [getWebAutoInstrumentations()], // add auto-instrumentation
  });
  sdk.start();
};
```

### Run

Build and run your application, and then look for data in Honeycomb.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
