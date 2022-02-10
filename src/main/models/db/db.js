/* eslint-disable no-case-declarations */
const { app } = require('electron');
const Datastore = require('nedb-promises');
const { find, findOne } = require('./actions/find');
const { insert } = require('./actions/insert');

const dbFactory = (fileName) =>
  Datastore.create({
    filename: `${
      process.env.NODE_ENV === 'dev' ? '.' : app.getAppPath('userData')
    }/data/${fileName}`,
    timestampData: true,
    autoload: true,
  });

const db = {
  invoices: dbFactory('invoices.db'),
  customers: dbFactory('customers.db'),
};

const databaseHandler = async (action, _db, extra) => {
  let returnData = {
    status: false,
    data: false,
    message: false,
    error: false,
  };
  const validAction = ['find', 'insert', 'findOne'];
  const validDb = Object.keys(db).map((_) => _.toLowerCase());
  if (!validAction.includes(action.toLowerCase())) {
    returnData.error = 'Called action is not a valid action';
  } else if (!validDb.includes(_db.toLowerCase())) {
    returnData.error = 'Db in focus is not a valid db';
  } else {
    try {
      const paramObj = {
        extra,
        returnData: {
          ...returnData,
          db: db[_db.toLowerCase()],
        },
      };
      console.log(extra?.data);
      switch (action) {
        case 'find':
          returnData = await find(paramObj);
          break;
        case 'findOne':
          returnData = await findOne(paramObj);
          break;
        case 'insert':
          returnData = await insert(paramObj);
          break;
        default:
          returnData.message = 'Action not defined';
          break;
      }
      returnData.status = true;
    } catch (error) {
      console.log(error);
      returnData.error = 'There is some technical issue in db calls';
    }
  }
  return returnData;
};

module.exports = { db, databaseHandler };
