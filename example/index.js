const AIRFLOW = require('./../dist/index');

const EXAMPLE = async () => {
  const Client = new AIRFLOW.client({
    airflowUrl: 'http://localhost:8080'
  });

  const checkTest = await Client.checkTest();
  console.log(checkTest);

  const getPools = await Client.getAllPools();
  console.log(getPools);

  const createDagRun = await Client.createDAGRunById('tutorial', {
    conf: {
      my_param: 'Parameter I passed in'
    }
  });
  console.log(createDagRun);

  const getDagRun = await Client.getDAGRunById('tutorial');
  console.log(getDagRun);

  const getLatestDag = await Client.latestDAGRuns();
  console.log(getLatestDag);

  const createPool = await Client.createPool({
    slots: 0,
    name: 'test',
    description: 'this is a test'
  });
  console.log(createPool);

  const getPoolByName = await Client.getPoolByName('test');
  console.log(getPoolByName);

  const removePoolByName = await Client.removePoolByName('test');

  console.log(removePoolByName);

  return true;
};


EXAMPLE()
  .then(result => console.log(result))
  .catch(err => console.error(err));