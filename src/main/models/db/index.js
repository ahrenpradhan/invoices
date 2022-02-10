import { ipcMain } from 'electron';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { db, databaseHandler } = require('./db');

const InitializeIpcForDB = () => {
  // DATABASE
  // const invoices = await db.invoices.find({});
  // const companies = await db.companies.insert({
  //   name: 'Google',
  // });
  // console.log('----------INVOICES----------------');
  // console.log(invoices);
  // console.log('----------companies----------------');
  // console.log(companies);
  ipcMain.on('db:operation', async (event, ...args) => {
    console.log('----------db:operation----------------');
    const responseDatabaseHandler = await databaseHandler(...args.slice(1));
    if (args[0]) {
      event.reply(args[0], responseDatabaseHandler);
    } else {
      console.log(responseDatabaseHandler);
    }
  });
};

export default InitializeIpcForDB;
