/**
 * @remarks
 * The configuration values for the node module
 *
 * @param timeout - Optional* The Timeout limitation in milliseconds
 * @param airflowUrl - The API URL http://127.0.0.1:8080
*/
type typeAirflowConfig = {
  timeout?: number|undefined|null,
  airflowUrl: string
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
type createDAGRunFunction = (id: string, options: dagConfigOptions) =>  Promise<object>;

/**
 * @remarks
 *  You can lookup a DAG run by ID
 * @param id - DAG ID
*/
type getDAGRunFunction = (id: string) =>  Promise<object>;

/**
 * @remarks
 *  You can lookup a DAG run by ID and Date
 * @param id - DAG ID
 * @param date - YYYY-mm-DDTHH:MM:SS
*/
type getDAGRunbyDateFunction = (id: string, date: string) => Promise<object>;

/**
 * @remarks
 *  You check the test endpoint
*/
type getTestFunction = () => Promise<object>;


/**
 * @remarks
 *  You can lookup a DAG Task by ID and TaskID
 * @param id - DAG ID
 * @param taskId - Task ID
*/
type getDAGTaskFunction = (id: string, taskId: string) => Promise<object>;

/**
 * @remarks
 *  You can lookup a DAG Task by ID and TaskID and Date
 * @param id - DAG ID
 * @param taskId - Task ID
 * @param date - YYYY-mm-DDTHH:MM:SS
*/
type getDAGTaskDateFunction = (id: string, taskId: string, date: string) => Promise<object>;

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
type latestDAGRunsFunction = () => Promise<object>;

/**
 * @remarks
 *  Get All Pools
*/
type getPoolsFunction = () => Promise<object>;

/**
 * @remarks
 *  Get Pool by Name
 * @param name - Pool Name
*/
type getPoolsNameFunction = (name: string) => Promise<object>;


/**
 * @remarks
 *  Get Pool by Name
 * @param name - Pool Name
*/
type removePoolNameFunction = (name: string) => Promise<object>;

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
  conf: object
};

type createPoolConfig = {
  name: string,
  slots: number,
  description: string
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
