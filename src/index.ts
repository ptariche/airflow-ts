import Axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import {
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
} from './types/';

class Airflow {
  protected config: typeAirflowConfig;
  protected axios: AxiosInstance;

  constructor (config: typeAirflowConfig) {
    if (!config.airflowUrl) {
      throw new Error ('airflowUrl is required');
    }

    let auth:{username: string, password: string};

    const configBase:{baseURL:string, timeout:number} = {
      baseURL: config.airflowUrl,
      timeout: config.timeout || 10000,
    };

    if (config.airFlowUsername && config.airFlowPassword) {
      auth = {
        username: config.airFlowUsername,
        password: config.airFlowPassword
      };
    }

    const _axios:AxiosInstance = Axios.create(Object.assign({}, configBase, auth));

    _axios.interceptors.response.use(
      (response: AxiosResponse) => response && response.data ? response.data : null,
      (error: AxiosError) => {
        return Promise.reject(
          error.response && error.response.data
        );
      }
    );

    this.axios  = _axios;
    this.config = config;
  };

  private retrieve:retrieveFunction = (method, route, body, options) => {
    switch (method) {
      case httpMethods.GET: 
        return this.axios[method](route);
      break;
      case httpMethods.PUT: 
        return this.axios[method](route, body, options);
      break;
      case httpMethods.POST: 
        return this.axios[method](route, body, options);
      break;
      case httpMethods.DELETE: 
        return this.axios[method](route);
      break;
    }
  };

  public createDAGRunById:createDAGRunFunction = async (id, config) => {
    return await this.retrieve(httpMethods.POST, `/api/experimental/dags/${id}/dag_runs`, config);
  };

  public getDAGRunById:getDAGRunFunction = async (id) => {
    return await this.retrieve(httpMethods.GET, `/api/experimental/dags/${id}/dag_runs`);
  };

  public getDAGRunByIdandDate:getDAGRunbyDateFunction = async (id, date) => {
    return await this.retrieve(httpMethods.GET, `/api/experimental/dags/${id}/dag_runs/${date}`);
  };

  public checkTest:getTestFunction = async () => {
    return await this.retrieve(httpMethods.GET, `/api/experimental/test`);
  };

  public getDAGTaskById:getDAGTaskFunction = async (id, taskId) => {
    return await this.retrieve(httpMethods.GET, `/api/experimental/dags/${id}/tasks/${taskId}`);
  };

  public getDAGTaskByDateandId:getDAGTaskDateFunction = async (id, taskId, date) => {
    return await this.retrieve(httpMethods.GET, `/api/experimental/dags/${id}/dag_runs/${date}/tasks/${taskId}`);
  };

  public pauseDAGById:pauseDAGFunction = async (id, pause) => {
    return await this.retrieve(httpMethods.GET, `/api/experimental/dags/${id}/paused/${pause.toString()}`);
  };

  public latestDAGRuns:latestDAGRunsFunction = async () => {
    return await this.retrieve(httpMethods.GET, `/api/experimental/latest_runs`);
  };

  public getAllPools:getPoolsFunction = async () => {
    return await this.retrieve(httpMethods.GET, `/api/experimental/pools`);
  };
  
  public getPoolByName:getPoolsNameFunction = async (name) => {
    return await this.retrieve(httpMethods.GET, `/api/experimental/pools/${name}`);
  };

  public removePoolByName:removePoolNameFunction = async (name) => {
    return await this.retrieve(httpMethods.DELETE, `/api/experimental/pools/${name}`);
  };

  public createPool:createPoolFunction = async (config) => {
    return await this.retrieve(httpMethods.POST, `/api/experimental/pools`, config);
  };

};

export {
  Airflow as client
};

