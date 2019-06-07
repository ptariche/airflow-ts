---
id: api-modules-types-index-module
title: types/index Module
sidebar_label: types/index
---

[airflow-api](api-readme.md) > [[types/index Module]](api-modules-types-index-module.md)

## Module

### Enumerations

* [httpMethods](api-enums-types-index-httpmethods.md)

### Type aliases

* [createDAGRunFunction](api-modules-types-index-module.md#createdagrunfunction)
* [createPoolConfig](api-modules-types-index-module.md#createpoolconfig)
* [createPoolFunction](api-modules-types-index-module.md#createpoolfunction)
* [dagConfigOptions](api-modules-types-index-module.md#dagconfigoptions)
* [getDAGRunFunction](api-modules-types-index-module.md#getdagrunfunction)
* [getDAGRunbyDateFunction](api-modules-types-index-module.md#getdagrunbydatefunction)
* [getDAGTaskDateFunction](api-modules-types-index-module.md#getdagtaskdatefunction)
* [getDAGTaskFunction](api-modules-types-index-module.md#getdagtaskfunction)
* [getPoolsFunction](api-modules-types-index-module.md#getpoolsfunction)
* [getPoolsNameFunction](api-modules-types-index-module.md#getpoolsnamefunction)
* [getTestFunction](api-modules-types-index-module.md#gettestfunction)
* [latestDAGRunsFunction](api-modules-types-index-module.md#latestdagrunsfunction)
* [pauseDAGFunction](api-modules-types-index-module.md#pausedagfunction)
* [removePoolNameFunction](api-modules-types-index-module.md#removepoolnamefunction)
* [retrieveFunction](api-modules-types-index-module.md#retrievefunction)
* [typeAirflowConfig](api-modules-types-index-module.md#typeairflowconfig)

---

## Type aliases

<a id="createdagrunfunction"></a>

###  createDAGRunFunction

**Ƭ createDAGRunFunction**: *`function`*

*__remarks__*: You can create a DAG run based off of a config.

*__param__*: DAG ID

*__param__*: Object

*__param__*: Object

#### Type declaration
▸(id: *`string`*, options: *[dagConfigOptions](api-modules-types-index-module.md#dagconfigoptions)*): `Promise`<`object`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| options | [dagConfigOptions](api-modules-types-index-module.md#dagconfigoptions) |

**Returns:** `Promise`<`object`>

___
<a id="createpoolconfig"></a>

###  createPoolConfig

**Ƭ createPoolConfig**: *`object`*

#### Type declaration

 description: `string`

 name: `string`

 slots: `number`

___
<a id="createpoolfunction"></a>

###  createPoolFunction

**Ƭ createPoolFunction**: *`function`*

*__remarks__*: You can create a DAG Pool

*__param__*: DAG ID

*__param__*: Object

*__param__*: name

*__param__*: number,

*__param__*: name

#### Type declaration
▸(options: *[createPoolConfig](api-modules-types-index-module.md#createpoolconfig)*): `Promise`<`object`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| options | [createPoolConfig](api-modules-types-index-module.md#createpoolconfig) |

**Returns:** `Promise`<`object`>

___
<a id="dagconfigoptions"></a>

###  dagConfigOptions

**Ƭ dagConfigOptions**: *`object`*

#### Type declaration

 conf: `object`

___
<a id="getdagrunfunction"></a>

###  getDAGRunFunction

**Ƭ getDAGRunFunction**: *`function`*

*__remarks__*: You can lookup a DAG run by ID

*__param__*: DAG ID

#### Type declaration
▸(id: *`string`*): `Promise`<`object`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`object`>

___
<a id="getdagrunbydatefunction"></a>

###  getDAGRunbyDateFunction

**Ƭ getDAGRunbyDateFunction**: *`function`*

*__remarks__*: You can lookup a DAG run by ID and Date

*__param__*: DAG ID

*__param__*: YYYY-mm-DDTHH:MM:SS

#### Type declaration
▸(id: *`string`*, date: *`string`*): `Promise`<`object`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| date | `string` |

**Returns:** `Promise`<`object`>

___
<a id="getdagtaskdatefunction"></a>

###  getDAGTaskDateFunction

**Ƭ getDAGTaskDateFunction**: *`function`*

*__remarks__*: You can lookup a DAG Task by ID and TaskID and Date

*__param__*: DAG ID

*__param__*: Task ID

*__param__*: YYYY-mm-DDTHH:MM:SS

#### Type declaration
▸(id: *`string`*, taskId: *`string`*, date: *`string`*): `Promise`<`object`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| taskId | `string` |
| date | `string` |

**Returns:** `Promise`<`object`>

___
<a id="getdagtaskfunction"></a>

###  getDAGTaskFunction

**Ƭ getDAGTaskFunction**: *`function`*

*__remarks__*: You can lookup a DAG Task by ID and TaskID

*__param__*: DAG ID

*__param__*: Task ID

#### Type declaration
▸(id: *`string`*, taskId: *`string`*): `Promise`<`object`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| taskId | `string` |

**Returns:** `Promise`<`object`>

___
<a id="getpoolsfunction"></a>

###  getPoolsFunction

**Ƭ getPoolsFunction**: *`function`*

*__remarks__*: Get All Pools

#### Type declaration
▸(): `Promise`<`object`>

**Returns:** `Promise`<`object`>

___
<a id="getpoolsnamefunction"></a>

###  getPoolsNameFunction

**Ƭ getPoolsNameFunction**: *`function`*

*__remarks__*: Get Pool by Name

*__param__*: Pool Name

#### Type declaration
▸(name: *`string`*): `Promise`<`object`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`object`>

___
<a id="gettestfunction"></a>

###  getTestFunction

**Ƭ getTestFunction**: *`function`*

*__remarks__*: You check the test endpoint

#### Type declaration
▸(): `Promise`<`object`>

**Returns:** `Promise`<`object`>

___
<a id="latestdagrunsfunction"></a>

###  latestDAGRunsFunction

**Ƭ latestDAGRunsFunction**: *`function`*

*__remarks__*: Get the latest DAG Runs

#### Type declaration
▸(): `Promise`<`object`>

**Returns:** `Promise`<`object`>

___
<a id="pausedagfunction"></a>

###  pauseDAGFunction

**Ƭ pauseDAGFunction**: *`function`*

*__remarks__*: You can Pause a DAG

*__param__*: DAG ID

*__param__*: Pause the DAG

#### Type declaration
▸(id: *`string`*, pause: *`boolean`*): `Promise`<`object`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| pause | `boolean` |

**Returns:** `Promise`<`object`>

___
<a id="removepoolnamefunction"></a>

###  removePoolNameFunction

**Ƭ removePoolNameFunction**: *`function`*

*__remarks__*: Get Pool by Name

*__param__*: Pool Name

#### Type declaration
▸(name: *`string`*): `Promise`<`object`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`object`>

___
<a id="retrievefunction"></a>

###  retrieveFunction

**Ƭ retrieveFunction**: *`function`*

*__remarks__*: The Axios Retrieve Function Signature

*__param__*: Optional\* The body to post or put

*__param__*: The rest path

*__param__*: HTTP Method: get,post,put,delete,patch

#### Type declaration
▸(method: *[httpMethods](api-enums-types-index-httpmethods.md)*, route: *`string`*, body?: *`object` \| `string` \| `null` \| `undefined`*, options?: *`object` \| `null` \| `undefined`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [httpMethods](api-enums-types-index-httpmethods.md) |
| route | `string` |
| `Optional` body | `object` \| `string` \| `null` \| `undefined` |
| `Optional` options | `object` \| `null` \| `undefined` |

**Returns:** `Promise`<`any`>

___
<a id="typeairflowconfig"></a>

###  typeAirflowConfig

**Ƭ typeAirflowConfig**: *`object`*

*__remarks__*: The configuration values for the node module

*__param__*: Optional\* The Timeout limitation in milliseconds

*__param__*: The API URL [http://127.0.0.1:8080](http://127.0.0.1:8080)

#### Type declaration

 airflowUrl: `string`

`Optional`  timeout: `number` \| `undefined` \| `null`

___

