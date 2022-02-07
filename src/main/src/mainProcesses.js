import { ipcMain, dialog, app } from 'electron';
const { db, databaseHandler } = require('./db');

const InitialIPCMainListeners = async () => {
  // ipcMain.on('ipc-example', async (event, arg) => {
  //   const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  //   console.log(msgTemplate(arg));
  //   event.reply('ipc-example', msgTemplate('pong'));
  // });

  ipcMain.on('dialog:open', async (event, ...args) => {
    // fs.readFile('path/to/file', (error, data) => {
    //   // Do something with file contents

    //   // Send result back to renderer process
    //   win.webContents.send('fromMain', responseObj);
    // });
    // console.log('--------GOT it -----------');
    // console.log(args);
    const response_showOpenDialog = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
        { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
        { name: 'Custom File Type', extensions: ['as'] },
        { name: 'All Files', extensions: ['*'] },
      ],
    });
    if (!!args[0]) {
      event.reply(args[0], response_showOpenDialog);
    } else {
      console.log(response_showOpenDialog);
    }
  });
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
    const response_databaseHandler = await databaseHandler(...args.slice(1));
    if (!!args[0]) {
      event.reply(args[0], response_databaseHandler);
    } else {
      console.log(response_databaseHandler);
    }
  });
};

export default InitialIPCMainListeners;
