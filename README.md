# Solutions Consulting Portal UI


## Purpose
The solutions consulting portal is designed to provide a central source for tooling and data that will help make the SA community more efficient and produtive.

## Initial Modules

### Champion Tracker
Module to help identify, track, and grow champions within your accounts while also giving increased visiblity to those actions. It allows you to identify potential champions, create an action plan to grow them, and to easily find champions within an account.

### Sizing Intake
Provides a way to give customers an easy to fill out webform to capture inputs to the sizing process. The form is adaptive and adjusts to questions to tailor the experience with the goal of capturing higher quality sizing data with less effort for both customer and SA. 

## Dependencies
SC Portal is built using the following technologies
* Angular 15.x
* [Angular CLI 15](https://angular.io/cli)
* [Node 18.12.1](https://nodejs.org/en/download/)
* [Ng Bootstrap](https://ng-bootstrap.github.io/#/home) 
* [Angular Material](https://material.angular.io/) (for stepper module)
* [Argon Dashboard 2](https://www.creative-tim.com/product/argon-dashboard) - Used for some CSS elements

These are the key dependencies. For a detailed list, see the package.json file for specific packages and versions.


## How to Build

You will need NPM and Angular-CLI installed before you can build the app. See links above details on how to install those tools

To run the applicaiton locally, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.


## Bulding Docker container

When deployed into Kanopy, the UI will be done as a docker container and use nginx to handle the webserver portions. To do that build simply run
 ` docker build . -t sa-portal/ui:<version>` to generate the correct docker image. 

You can test the docker image locally by running `docker run -p 8080:80 sa-portal:ui:<version>` to match the entry above. 
## Running unit tests

Unit tests are not complete and do not exist for some components. This will be improved over time.
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## How to Contribute

For details on how to contribute to the project and code base see [Contributing](CONTRIBUTING.md)

## Further help

Contact [Josh.Smith@mongodb.com](mailto:Josh.Smith@mongodb.com) for questions
