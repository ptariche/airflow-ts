---
id: api-classes-index-airflow
title: Airflow
sidebar_label: Airflow
---

[airflow-api - v0.1.8](api-readme.md) > [[index Module]](api-modules-index-module.md) > [Airflow](api-classes-index-airflow.md)

## Class

## Hierarchy

**Airflow**

### Constructors

* [constructor](api-classes-index-airflow.md#constructor)

### Properties

* [axios](api-classes-index-airflow.md#axios)
* [config](api-classes-index-airflow.md#config)

### Methods

* [checkTest](api-classes-index-airflow.md#checktest)
* [createDAGRunById](api-classes-index-airflow.md#createdagrunbyid)
* [createPool](api-classes-index-airflow.md#createpool)
* [getAllPools](api-classes-index-airflow.md#getallpools)
* [getDAGRunById](api-classes-index-airflow.md#getdagrunbyid)
* [getDAGRunByIdandDate](api-classes-index-airflow.md#getdagrunbyidanddate)
* [getDAGTaskByDateandId](api-classes-index-airflow.md#getdagtaskbydateandid)
* [getDAGTaskById](api-classes-index-airflow.md#getdagtaskbyid)
* [getPoolByName](api-classes-index-airflow.md#getpoolbyname)
* [latestDAGRuns](api-classes-index-airflow.md#latestdagruns)
* [pauseDAGById](api-classes-index-airflow.md#pausedagbyid)
* [removePoolByName](api-classes-index-airflow.md#removepoolbyname)
* [retrieve](api-classes-index-airflow.md#retrieve)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Airflow**(config: *[typeAirflowConfig](api-modules-types-index-module.md#typeairflowconfig)*): [Airflow](api-classes-index-airflow.md)

**Parameters:**

| Name | Type |
| ------ | ------ |
| config | [typeAirflowConfig](api-modules-types-index-module.md#typeairflowconfig) |

**Returns:** [Airflow](api-classes-index-airflow.md)

___

## Properties

<a id="axios"></a>

### `<Protected>` axios

**● axios**: *`AxiosInstance`*

___
<a id="config"></a>

### `<Protected>` config

**● config**: *[typeAirflowConfig](api-modules-types-index-module.md#typeairflowconfig)*

___

## Methods

<a id="checktest"></a>

###  checkTest

▸ **checkTest**(): `Promise`<`any`>

**Returns:** `Promise`<`any`>

___
<a id="createdagrunbyid"></a>

###  createDAGRunById

▸ **createDAGRunById**(id: *`string`*, config: *`object`*): `Promise`<`any`>

**Parameters:**

**id: `string`**

**config: `object`**

| Name | Type |
| ------ | ------ |
| conf | `any` |

**Returns:** `Promise`<`any`>

___
<a id="createpool"></a>

###  createPool

▸ **createPool**(config: *`object`*): `Promise`<`any`>

**Parameters:**

**config: `object`**

| Name | Type |
| ------ | ------ |
| description | `string` |
| name | `string` |
| slots | `number` |

**Returns:** `Promise`<`any`>

___
<a id="getallpools"></a>

###  getAllPools

▸ **getAllPools**(): `Promise`<`any`>

**Returns:** `Promise`<`any`>

___
<a id="getdagrunbyid"></a>

###  getDAGRunById

▸ **getDAGRunById**(id: *`string`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getdagrunbyidanddate"></a>

###  getDAGRunByIdandDate

▸ **getDAGRunByIdandDate**(id: *`string`*, date: *`string`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| date | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getdagtaskbydateandid"></a>

###  getDAGTaskByDateandId

▸ **getDAGTaskByDateandId**(id: *`string`*, taskId: *`string`*, date: *`string`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| taskId | `string` |
| date | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getdagtaskbyid"></a>

###  getDAGTaskById

▸ **getDAGTaskById**(id: *`string`*, taskId: *`string`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| taskId | `string` |

**Returns:** `Promise`<`any`>

___
<a id="getpoolbyname"></a>

###  getPoolByName

▸ **getPoolByName**(name: *`string`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`any`>

___
<a id="latestdagruns"></a>

###  latestDAGRuns

▸ **latestDAGRuns**(): `Promise`<`any`>

**Returns:** `Promise`<`any`>

___
<a id="pausedagbyid"></a>

###  pauseDAGById

▸ **pauseDAGById**(id: *`string`*, pause: *`boolean`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `string` |
| pause | `boolean` |

**Returns:** `Promise`<`any`>

___
<a id="removepoolbyname"></a>

###  removePoolByName

▸ **removePoolByName**(name: *`string`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `Promise`<`any`>

___
<a id="retrieve"></a>

### `<Private>` retrieve

▸ **retrieve**(method: *[httpMethods](api-enums-types-index-httpmethods.md)*, route: *`string`*, body: *`string` \| `object`*, options: *`object`*): `Promise`<`any`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| method | [httpMethods](api-enums-types-index-httpmethods.md) |
| route | `string` |
| body | `string` \| `object` |
| options | `object` |

**Returns:** `Promise`<`any`>

___

