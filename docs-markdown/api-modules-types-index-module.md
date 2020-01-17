---
id: api-modules-types-index-module
title: types/index Module
sidebar_label: types/index
---

[airflow-api - v0.1.8](api-readme.md) > [[types/index Module]](api-modules-types-index-module.md)

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

#### Type declaration
▸(): `Promise`<[getPoolsResponse](api-modules-types-index-module.md#getpoolsresponse) \| `null`>

**Returns:** `Promise`<[getPoolsResponse](api-modules-types-index-module.md#getpoolsresponse) \| `null`>

___
<a id="getpoolsnamefunction"></a>

###  getPoolsNameFunction

**Ƭ getPoolsNameFunction**: *`function`*

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

#### Type declaration
▸(): `Promise`<[getStatusResponse](api-modules-types-index-module.md#getstatusresponse) \| `null`>

**Returns:** `Promise`<[getStatusResponse](api-modules-types-index-module.md#getstatusresponse) \| `null`>

___
<a id="latestdagrunsfunction"></a>

###  latestDAGRunsFunction

**Ƭ latestDAGRunsFunction**: *`function`*

#### Type declaration
▸(): `Promise`<[getLatestDagResponse](api-modules-types-index-module.md#getlatestdagresponse) \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

**Returns:** `Promise`<[getLatestDagResponse](api-modules-types-index-module.md#getlatestdagresponse) \| [errorGenericResponse](api-modules-types-index-module.md#errorgenericresponse)>

___
<a id="pausedagfunction"></a>

###  pauseDAGFunction

**Ƭ pauseDAGFunction**: *`function`*

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

#### Type declaration
▸(method: *[httpMethods](api-enums-types-index-httpmethods.md)*, route: *`string`*, body: *`object` \| `string` \| `null` \| `undefined`*, options: *`object` \| `null` \| `undefined`*): `Promise`<`any`>

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

#### Type declaration

`Optional`  airflowPassword: `string`

 airflowUrl: `string`

`Optional`  airflowUsername: `string`

`Optional`  timeout: `number` \| `undefined` \| `null`

___

