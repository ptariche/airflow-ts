---
id: api-modules-types-index-module
title: types/index Module
sidebar_label: types/index
---

[airflow-api](api-readme.md) > [[types/index Module]](api-modules-types-index-module.md)

## Module

### Enumerations

* [httpMethods](api-enums-types-index-httpmethods.md)

### Interfaces

* [dagRunInterface](api-interfaces-types-index-dagruninterface.md)

### Type aliases

* [createDAGRunFunction](api-modules-types-index-module.md#createdagrunfunction)
* [createPoolConfig](api-modules-types-index-module.md#createpoolconfig)
* [createPoolFunction](api-modules-types-index-module.md#createpoolfunction)
* [dagConfigOptions](api-modules-types-index-module.md#dagconfigoptions)
* [dagItemType](api-modules-types-index-module.md#dagitemtype)
* [dagRunCreateResponse](api-modules-types-index-module.md#dagruncreateresponse)
* [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)
* [getDAGRunFunction](api-modules-types-index-module.md#getdagrunfunction)
* [getDAGRunbyDateFunction](api-modules-types-index-module.md#getdagrunbydatefunction)
* [getDAGTaskDateFunction](api-modules-types-index-module.md#getdagtaskdatefunction)
* [getDAGTaskFunction](api-modules-types-index-module.md#getdagtaskfunction)
* [getDagResponse](api-modules-types-index-module.md#getdagresponse)
* [getLatestDagResponse](api-modules-types-index-module.md#getlatestdagresponse)
* [getPoolsFunction](api-modules-types-index-module.md#getpoolsfunction)
* [getPoolsNameFunction](api-modules-types-index-module.md#getpoolsnamefunction)
* [getPoolsResponse](api-modules-types-index-module.md#getpoolsresponse)
* [getStatusResponse](api-modules-types-index-module.md#getstatusresponse)
* [getTestFunction](api-modules-types-index-module.md#gettestfunction)
* [latestDAGRunsFunction](api-modules-types-index-module.md#latestdagrunsfunction)
* [pauseDAGFunction](api-modules-types-index-module.md#pausedagfunction)
* [poolResponse](api-modules-types-index-module.md#poolresponse)
* [removePoolNameFunction](api-modules-types-index-module.md#removepoolnamefunction)
* [removePoolResponse](api-modules-types-index-module.md#removepoolresponse)
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
▸(id: *`string`*, options: *[dagConfigOptions](api-modules-types-index-module.md#dagconfigoptions)*): `Promise`<[dagRunCreateResponse](api-modules-types-index-module.md#dagruncreateresponse) \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| options | [dagConfigOptions](api-modules-types-index-module.md#dagconfigoptions) |

**Returns:** `Promise`<[dagRunCreateResponse](api-modules-types-index-module.md#dagruncreateresponse) \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

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

 conf: `any`

___
<a id="dagitemtype"></a>

###  dagItemType

**Ƭ dagItemType**: *`object`*

#### Type declaration

 dag_id: `string`

 dag_run_url: `string`

 execution_date: `string`

 start_date: `string`

___
<a id="dagruncreateresponse"></a>

###  dagRunCreateResponse

**Ƭ dagRunCreateResponse**: *`object`*

#### Type declaration

 message: `string`

___
<a id="errorgenericresponse"></a>

###  errorGenericResponse

**Ƭ errorGenericResponse**: *`object`*

#### Type declaration

 error: `string`

___
<a id="getdagrunfunction"></a>

###  getDAGRunFunction

**Ƭ getDAGRunFunction**: *`function`*

*__remarks__*: You can lookup a DAG run by ID

*__param__*: DAG ID

#### Type declaration
▸(id: *`string`*): `Promise`<[getDagResponse](api-modules-types-index-module.md#getdagresponse) \| [dagRunInterface](api-interfaces-types-index-dagruninterface.md) \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<[getDagResponse](api-modules-types-index-module.md#getdagresponse) \| [dagRunInterface](api-interfaces-types-index-dagruninterface.md) \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

___
<a id="getdagrunbydatefunction"></a>

###  getDAGRunbyDateFunction

**Ƭ getDAGRunbyDateFunction**: *`function`*

*__remarks__*: You can lookup a DAG run by ID and Date

*__param__*: DAG ID

*__param__*: YYYY-mm-DDTHH:MM:SS

#### Type declaration
▸(id: *`string`*, date: *`string`*): `Promise`<[dagRunInterface](api-interfaces-types-index-dagruninterface.md) \| [getDagResponse](api-modules-types-index-module.md#getdagresponse) \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| date | `string` |

**Returns:** `Promise`<[dagRunInterface](api-interfaces-types-index-dagruninterface.md) \| [getDagResponse](api-modules-types-index-module.md#getdagresponse) \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

___
<a id="getdagtaskdatefunction"></a>

###  getDAGTaskDateFunction

**Ƭ getDAGTaskDateFunction**: *`function`*

*__remarks__*: You can lookup a DAG Task by ID and TaskID and Date

*__param__*: DAG ID

*__param__*: Task ID

*__param__*: YYYY-mm-DDTHH:MM:SS

#### Type declaration
▸(id: *`string`*, taskId: *`string`*, date: *`string`*): `Promise`<`object` \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| taskId | `string` |
| date | `string` |

**Returns:** `Promise`<`object` \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

___
<a id="getdagtaskfunction"></a>

###  getDAGTaskFunction

**Ƭ getDAGTaskFunction**: *`function`*

*__remarks__*: You can lookup a DAG Task by ID and TaskID

*__param__*: DAG ID

*__param__*: Task ID

#### Type declaration
▸(id: *`string`*, taskId: *`string`*): `Promise`<`object` \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| taskId | `string` |

**Returns:** `Promise`<`object` \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

___
<a id="getdagresponse"></a>

###  getDagResponse

**Ƭ getDagResponse**: *[[dagRunInterface](api-interfaces-types-index-dagruninterface.md)]*

___
<a id="getlatestdagresponse"></a>

###  getLatestDagResponse

**Ƭ getLatestDagResponse**: *`object`*

#### Type declaration

 items: [[dagItemType](api-modules-types-index-module.md#dagitemtype)]

___
<a id="getpoolsfunction"></a>

###  getPoolsFunction

**Ƭ getPoolsFunction**: *`function`*

*__remarks__*: Get All Pools

#### Type declaration
▸(): `Promise`<[getPoolsResponse](api-modules-types-index-module.md#getpoolsresponse) \| `null`>

**Returns:** `Promise`<[getPoolsResponse](api-modules-types-index-module.md#getpoolsresponse) \| `null`>

___
<a id="getpoolsnamefunction"></a>

###  getPoolsNameFunction

**Ƭ getPoolsNameFunction**: *`function`*

*__remarks__*: Get Pool by Name

*__param__*: Pool Name

#### Type declaration
▸(name: *`string`*): `Promise`<[poolResponse](api-modules-types-index-module.md#poolresponse) \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse) \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[poolResponse](api-modules-types-index-module.md#poolresponse) \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse) \| `null`>

___
<a id="getpoolsresponse"></a>

###  getPoolsResponse

**Ƭ getPoolsResponse**: *[[poolResponse](api-modules-types-index-module.md#poolresponse)]*

___
<a id="getstatusresponse"></a>

###  getStatusResponse

**Ƭ getStatusResponse**: *`object`*

#### Type declaration

 status: `string`

___
<a id="gettestfunction"></a>

###  getTestFunction

**Ƭ getTestFunction**: *`function`*

*__remarks__*: You check the test endpoint

#### Type declaration
▸(): `Promise`<[getStatusResponse](api-modules-types-index-module.md#getstatusresponse) \| `null`>

**Returns:** `Promise`<[getStatusResponse](api-modules-types-index-module.md#getstatusresponse) \| `null`>

___
<a id="latestdagrunsfunction"></a>

###  latestDAGRunsFunction

**Ƭ latestDAGRunsFunction**: *`function`*

*__remarks__*: Get the latest DAG Runs

#### Type declaration
▸(): `Promise`<[getLatestDagResponse](api-modules-types-index-module.md#getlatestdagresponse) \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

**Returns:** `Promise`<[getLatestDagResponse](api-modules-types-index-module.md#getlatestdagresponse) \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

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
<a id="poolresponse"></a>

###  poolResponse

**Ƭ poolResponse**: *`object`*

#### Type declaration

 description: `string`

 id: `number`

 pool: `string`

 slots: `number`

___
<a id="removepoolnamefunction"></a>

###  removePoolNameFunction

**Ƭ removePoolNameFunction**: *`function`*

*__remarks__*: Get Pool by Name

*__param__*: Pool Name

#### Type declaration
▸(name: *`string`*): `Promise`<[removePoolResponse](api-modules-types-index-module.md#removepoolresponse) \| `null`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<[removePoolResponse](api-modules-types-index-module.md#removepoolresponse) \| `null`>

___
<a id="removepoolresponse"></a>

###  removePoolResponse

**Ƭ removePoolResponse**: *`boolean`*

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

*__param__*: \*Optional The Airflow Username

*__param__*: \*Optional The Airflow Password

#### Type declaration

`Optional`  airflowPassword: `string`

 airflowUrl: `string`

`Optional`  airflowUsername: `string`

`Optional`  timeout: `number` \| `undefined` \| `null`

___

