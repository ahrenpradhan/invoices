const { app } = require('electron');
const Datastore = require('nedb-promises');

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
  let return_data = {
    status: false,
    data: false,
    message: false,
  };
  const validAction = ['find', 'insert'];
  const valid_db = Object.keys(db).map((_) => _.toLowerCase());
  if (!validAction.includes(action.toLowerCase())) {
    return_data.message = 'Called action is not a valid action';
  } else if (!valid_db.includes(_db.toLowerCase())) {
    return_data.message = 'Db in focus is not a valid db';
  } else {
    try {
      switch (action) {
        case 'find':
          const params = !extra
            ? {}
            : extra?.params && typeof extra?.params === 'object'
            ? extra?.params
            : false;
          if (!!params) {
            return_data.data = await db[_db.toLowerCase()].find({ ...params });
            return_data.message = 'Success';
          } else {
            return_data.message = 'Type of params is not type object';
          }
          break;
        default:
          return_data.message = 'Action not defined';
          break;
      }
      return_data.status = true;
    } catch (error) {
      return_data.message = 'There is some technical issue in db calls';
    }
  }
  return return_data;
};

module.exports = { db, databaseHandler };
