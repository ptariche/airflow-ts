---
id: api-readme
title: airflow-api - v0.1.8
sidebar_label: airflow-api - v0.1.8
---

[

Airflow-API
===========

](#airflow-api)

A Node module for Airflow in Typescript. This uses the experimental Airflow API.

[![npm version](https://badge.fury.io/js/airflow-api.svg)](https://badge.fury.io/js/airflow-api) [![Build Status](https://travis-ci.org/ptariche/airflow-ts.svg?branch=master)](https://travis-ci.org/ptariche/airflow-ts)

[

Documentation
-------------

](#documentation)

*   [MARKDOWN](./docs-markdown/api-readme.md)

* * *

[

### Prerequisites

](#prerequisites)

*   Node 10+

[

### Installation

](#installation)

Install the dependencies and devDependencies and start the server.

```sh
$ npm install --save airflow-api
```

[

### Usage

](#usage)

```js
  import {client} from 'airflow-api'; or  const CLIENT = require('airflow-api').client;

  let _client = new CLIENT\|\|client({
    airflowUrl: 'http://127.0.0.1:8080'
  });

  _client.checkTest().then(result => console.log(result)).catch(err => console.error(err));

```

[

### Enums Usage

](#enums-usage)

```js
  import * as AirflowEnum from 'airflow-api/dist/types' or   const AIRFLOW_ENUMS = require('airflow-api/dist/types');
```

[

### Development

](#development)

Want to contribute? Great! Make a Pr! Open your favorite Terminal and run these commands.

[

#### Building for source

](#building-for-source)

To release in javascript. The output is dumped in the dist folder:

```sh
$ npm run build
```

[

#### Testing

](#testing)

*   Uses Jest, Supertest, Chai - Integration Tests needed
    
    ```sh
      npm test
    ```
    

[

Changelog
---------

](#changelog)

[Link](./CHANGELOG.md)

[

License
-------

](#license)

[Apache-2.0](./LICENSE)

[

Author
------

](#author)

[Peter A. Tariche](https://github.com/ptariche)

### External modules

* [[index Module]](api-modules-index-module.md)
* [[types/index Module]](api-modules-types-index-module.md)

---

