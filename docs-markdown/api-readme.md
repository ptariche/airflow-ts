---
id: api-readme
title: airflow-api
sidebar_label: airflow-api
---

Airflow-API
===========

A Node module for Airflow in Typescript. This uses the experimental Airflow API.

[![npm version](https://badge.fury.io/js/airflow-api.svg)](https://badge.fury.io/js/airflow-api) [![Build Status](https://travis-ci.org/ptariche/airflow-ts.svg?branch=master)](https://travis-ci.org/ptariche/airflow-ts)

Documentation
-------------

* [[index Module]](api-modules-index-module.md)
* [[types/index Module]](api-modules-types-index-module.md)


* * *

### Prerequisites

*   Node 10+

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ npm install --save airflow-api
```

### Usage

```js
  import {client} from 'airflow-api'; or  const CLIENT = require('airflow-api').client;

  let _client = new CLIENT\|\|client({
    airflowUrl: 'http://127.0.0.1:8080'
  });

  _client.checkTest().then(result => console.log(result)).catch(err => console.error(err));

```

### Enums Usage

```js
  import * as AirflowEnum from 'airflow-api/dist/types' or   const AIRFLOW_ENUMS = require('airflow-api/dist/types');
```

### Development

Want to contribute? Great! Make a Pr! Open your favorite Terminal and run these commands.

#### Building for source

To release in javascript. The output is dumped in the dist folder:

```sh
$ npm run build
```

#### Testing

*   Uses Jest, Supertest, Chai - Integration Tests needed
    
    ```sh
      npm test
    ```
    

Changelog
---------

[Link](./CHANGELOG.md)

License
-------

[Apache-2.0](./LICENSE)

Author
------

[Peter A. Tariche](https://github.com/ptariche)
