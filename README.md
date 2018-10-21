# A basic calculator

I refer you to the title.

#### Table of contents

* [Getting started](#getting-started)
    * [Prerequisites](#prerequisites)
* [Usage](#usage)
* [Testing](#testing)

## Getting started

In order to get everything set up, you must install the following dependencies.

### Prerequisites

* Install [Docker](https://docs.docker.com/install/),
* Install [Docker compose](https://docs.docker.com/compose/install/).

## Usage

* To build and start the application, run:
```bash
docker-compose up
```
* Once the container is running, navigate to [http://localhost:8081](http://localhost:8081).

### Development

The development environment is setup using `webpack-dev-server` with live-reloading implemented.

* Install [Node.js v8.11.2+](https://nodejs.org/en/)
* Install [Yarn](https://yarnpkg.com/lang/en/docs/install)
* Install dependencies:
```bash
yarn install
```
* To build and start the application, run:
```bash
yarn start
```
* The webpage can be accessed via [http://localhost:1337](http://localhost:1337).

### Testing

* Run tests using:
```bash
yarn test
```
