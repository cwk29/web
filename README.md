# UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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

## RxJS Cheat Sheet

### Definitions

**Observable:** Emits (sometimes multiple) pieces of data.

**Pipe:** Sequence of Operations.

**Observer:** Reports back to the Observable.

## Workflow

1. Create feature branch

2. Commit changes and push

3. Merges into `main` will trigger GitHub Action Terraform Workflow

## Retrieve access credentials for your cluster and configure `kubectl`

`aws eks --region us-east-1 update-kubeconfig --name wortech-eks-dev`

## Deploy the app

```sh
$ docker build -t wtc-nginx .
[+] Building 129.4s (16/16) FINISHED
$ docker run --name app -d -p 8080:80 cwkuyke/wtc-nginx
$ docker push cwkuyke/wtc-nginx
```

## Internationalization for Spanish

Install dependencies

`ng add @angular/localize`

Update `angular.json

```json
{
  "projects": {
    "ui": {
      ...
      "i18n": {
        "sourceLocale": "en",
        "locales": {
          "es": {
            "translation": "src/locale/messages.es.xlf",
            "baseHref": ""
          }
        }
      },
      ...
      "architect": {
        "build": {
          "options": {
            "locales": [
              "en",
              "es"
            ],
            "i18nMissingTranslation": "error"
          },
          "configurations": {
            "es": {
              "localize": ["es"]
            }
        },
        "serve": {
          ...
          "configurations": {
            "es": {
              "browserTarget": "ui:build:es"
            }
          }
        }
      }
    }
  }
}
```

Look for Opportunities to Internationalize (OTI).

Mark all of the elements that require translation using `i18n` and `i18n-alt` directives.

Extract the elements marked for translation:

`ng extract-i18n --output-path src/locale`

Make a copy of the `src/locale/messages.xlf` file for each supported locales (just `messages.es.xlf` in our case).

Add a sibling element called `<target>` to each `<source>` element with the translated text.

Run the application:

`ng serve --configuration=es`

Build the application (outputs to dist/ui):

`ng build --localize`

If you serve the application, you will be able to view each language code base at `url:PORT/en` and `url:PORT/es`
