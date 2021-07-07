# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Description

The frontend has a big navigation bar, which contains a Home, Marketplace, Ecosystem and Simulation.
The home subpage contains a reset-admin button, which needs to be pressed whenever the blockchain is redeployed.
The marketplace subpage contains two topics: Placing an Offer and an offer-table.
With the first topic, you can manually place an offer.
The second topic has an offer-table, which shows all offers which are currently placed inside the blockchain. It also provides the ability to withdraw these offers.
The ecosystem subpage includes the ability to show any participants in the market system active and provides functions to create new users and participants - including consumers, producers and prosumers.
The simulation subpage firstly has the ability to start, stop and reset the simulation. Furthermore, it provides a transaction table and several KPI-Graphics to further analyse if the peakshaving suceeded and the behaviour of every participtant.

For further information regarding on which button to press or how the frontend works, check out the confluence.

## Run locally

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Run on AWS
Run `ng serve --host 0.0.0.0 --configuration=production --proxy-config proxy.config.json` for a dev server on the AWS.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
