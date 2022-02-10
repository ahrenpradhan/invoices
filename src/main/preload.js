const { contextBridge, ipcRenderer } = require('electron');
// const fs = require('fs');
// const { dialog } = require('electron');
// window.electron = {};
// window.electron.dialog = dialog;

// contextBridge.exposeInMainWorld('electron', {
//   ipcRenderer: {
//     myPing() {
//       ipcRenderer.send('ipc-example', 'ping');
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
    const dbValidChannels = ['dialog:open', 'db:operation'];
    const validChannels = [...dbValidChannels];
    if (validChannels.includes(channel)) {
      console.log(`SENDER ---- ${channel}`);
      // if (typeof data === 'string') console.log('SENDER args ---- ' + data);
      ipcRenderer.send(channel, ...args);
    }
  },
  receive: (channel, func) => {
    const mainValidChannels = ['file:get'];
    const validChannels = [...mainValidChannels];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      console.log(`LISTENER ON---- ${channel}`);
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
  receiveOnce: (channel, func) => {
    const mainValidChannels = ['file:get'];
    const dbValidChannels = ['db:get', 'db:create'];
    const validChannels = [...mainValidChannels, ...dbValidChannels];
    if (validChannels.includes(channel)) {
      // Deliberately strip event as it includes `sender`
      console.log(`LISTENER ONCE---- ${channel}`);
      ipcRenderer.once(channel, (event, ...args) => func(...args));
    }
  },
});
