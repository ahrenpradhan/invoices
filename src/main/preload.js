const { contextBridge, ipcRenderer } = require('electron');
// const fs = require('fs');
// const { dialog } = require('electron');
// window.electron = {};
// window.electron.dialog = dialog;

// window.electron.testfunction = () => {
//   console.log('this is testing');
// };

// ipcMain.on('asynchronous-message', (event, arg) => {
//   console.log(arg) // prints "ping"
//   event.reply('asynchronous-reply', 'pong')
// })
// ipcMain.on('synchronous-message', (event, arg) => {
//   console.log(arg) // prints "ping"
//   event.returnValue = 'pong'
// })

// ipcMain.on('synchronous-message', (event, arg) => {
//   console.log(arg); // prints "ping"
//   event.returnValue = 'pong';
// });

// contextBridge.exposeInMainWorld('electron', {
//   ipcRenderer: {
//     myPing() {
//       ipcRenderer.send('ipc-example', 'ping');
//     },
//     action(action, channel) {
//       let data = false;
//       switch (action) {
//         case 'dialog:open':
//           data = 'temp string';
//           break;
//         default:
//           break;
//       }
//       console.log('SENDER ---- ' + channel);
//       ipcRenderer.send(channel, data);
//     },
//     on(channel, func) {
//       const validChannels = ['ipc-example', 'file:get'];
//       if (validChannels.includes(channel)) {
//         // Deliberately strip event as it includes `sender`
//         console.log('LISTENER ON---- ' + channel);
//         ipcRenderer.on(channel, (event, ...args) => func(...args));
//       }
//     },
//     once(channel, func) {
//       const validChannels = ['ipc-example', 'file:get'];
//       if (validChannels.includes(channel)) {
//         // Deliberately strip event as it includes `sender`
//         console.log('LISTENER ONCE---- ' + channel);
//         ipcRenderer.once(channel, (event, ...args) => func(...args));
//       }
//     },
//   },
// });

contextBridge.exposeInMainWorld('api', {
  send: (channel, ...args) => {
    // whitelist channels
    const validChannels = ['dialog:open', 'db:operation'];
    if (validChannels.includes(channel)) {
      console.log('SENDER ---- ' + channel);
      // if (typeof data === 'string') console.log('SENDER args ---- ' + data);
      ipcRenderer.send(channel, ...args);
    }
  },
  receive: (channel, func) => {
    const validChannels = ['file:get'];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      console.log('LISTENER ON---- ' + channel);
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
  receiveOnce: (channel, func) => {
    const validChannels = ['file:get', 'db:get'];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      console.log('LISTENER ONCE---- ' + channel);
      ipcRenderer.once(channel, (event, ...args) => func(...args));
    }
  },
});
