import { ipcMain, dialog } from 'electron';

const InitialIPCMainListeners = () => {
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
    const responseShowOpenDialog = await dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
        { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
        { name: 'Custom File Type', extensions: ['as'] },
        { name: 'All Files', extensions: ['*'] },
      ],
    });
    if (args[0]) {
      event.reply(args[0], responseShowOpenDialog);
    } else {
      console.log(responseShowOpenDialog);
    }
  });
};

export default InitialIPCMainListeners;
