/**
 * @remarks
 * The configuration values for the node module
 *
 * @param timeout - Optional* The Timeout limitation in milliseconds
 * @param airflowUrl - The API URL http://127.0.0.1:8080
 * @param airflowUsername - *Optional The Airflow Username
 * @param airflowPassword - *Optional The Airflow Password
*/
type typeAirflowConfig = {
  timeout?: number|undefined|null,
  airflowUrl: string,
  airFlowUsername?: string,
  airFlowPassword?: string
};

/**
 * @remarks
 * The Axios Retrieve Function Signature
 *
 * @param body - Optional* The body to post or put
 * @param route - The rest path
 * @param method - HTTP Method: get,post,put,delete,patch
 * 
*/
type retrieveFunction = (method: httpMethods, route: string, body?: object|string|null|undefined, options?: object|null|undefined) =>  Promise<any>;

/**
 * @remarks
 * You can create a DAG run based off of a config.
 * @param id - DAG ID
 * @param options - Object
 * @param options.conf - Object
*/
type createDAGRunFunction = (id: string, options: dagConfigOptions) =>  Promise<dagRunCreateResponse|errorGenericResponse>;

/**
 * @remarks
 *  You can lookup a DAG run by ID
 * @param id - DAG ID
*/
type getDAGRunFunction = (id: string) =>  Promise<getDagResponse|dagRunInterface|errorGenericResponse>;

/**
 * @remarks
 *  You can lookup a DAG run by ID and Date
 * @param id - DAG ID
 * @param date - YYYY-mm-DDTHH:MM:SS
*/
type getDAGRunbyDateFunction = (id: string, date: string) => Promise<dagRunInterface|getDagResponse|errorGenericResponse>;

/**
 * @remarks
 *  You check the test endpoint
*/
type getTestFunction = () => Promise<getStatusResponse|null>;


/**
 * @remarks
 *  You can lookup a DAG Task by ID and TaskID
 * @param id - DAG ID
 * @param taskId - Task ID
*/
type getDAGTaskFunction = (id: string, taskId: string) => Promise<object|errorGenericResponse>;

/**
 * @remarks
 *  You can lookup a DAG Task by ID and TaskID and Date
 * @param id - DAG ID
 * @param taskId - Task ID
 * @param date - YYYY-mm-DDTHH:MM:SS
*/
type getDAGTaskDateFunction = (id: string, taskId: string, date: string) => Promise<object|errorGenericResponse>;

/**
 * @remarks
 *  You can Pause a DAG
 * @param id - DAG ID
 * @param pause - Pause the DAG
*/
type pauseDAGFunction = (id: string, pause: boolean) => Promise<object>;

/**
 * @remarks
 *  Get the latest DAG Runs
*/
type latestDAGRunsFunction = () => Promise<getLatestDagResponse|errorGenericResponse>;

/**
 * @remarks
 *  Get All Pools
*/
type getPoolsFunction = () => Promise<getPoolsResponse|null>;

/**
 * @remarks
 *  Get Pool by Name
 * @param name - Pool Name
*/
type getPoolsNameFunction = (name: string) => Promise<poolResponse|errorGenericResponse|null>;

/**
 * @remarks
 *  Get Pool by Name
 * @param name - Pool Name
*/
type removePoolNameFunction = (name: string) => Promise<removePoolResponse|null>;

/**
 * @remarks
 * You can create a DAG Pool
 * @param id - DAG ID
 * @param options - Object
 * @param options.name - name
 * @param options.slot - number,
 * @param options.description - name
*/
type createPoolFunction = (options: createPoolConfig) =>  Promise<object>;

type dagConfigOptions = {
  conf: any
};

type dagRunCreateResponse = {
  message: string
};

type createPoolConfig = {
  name: string,
  slots: number,
  description: string
};

type dagItemType = { 
  dag_id: string,
  dag_run_url: string,
  execution_date: string,
  start_date: string
};

interface dagRunInterface extends dagItemType {
  id: number,
  run_id: string,
  state: string
};

type getDagResponse = [dagRunInterface];

type getLatestDagResponse = {
  items: [dagItemType]
};

type removePoolResponse = boolean;

type poolResponse = {
  description: string, id: number, pool: string, slots: number
};

type getPoolsResponse = [poolResponse];

type errorGenericResponse = {
  error:string
};

type getStatusResponse = {
  status: string
};

enum httpMethods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch'
};


export {
  httpMethods,
  typeAirflowConfig,
  retrieveFunction,
  createDAGRunFunction,
  getDAGRunFunction,
  getDAGRunbyDateFunction,
  getTestFunction,
  getDAGTaskFunction,
  getDAGTaskDateFunction,
  pauseDAGFunction,
  latestDAGRunsFunction,
  getPoolsFunction,
  getPoolsNameFunction,
  removePoolNameFunction,
  createPoolFunction
};
