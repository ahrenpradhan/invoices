import InitialIPCMainListeners from './mainProcesses';
import InitializeIpcForDB from './db';

export default function IpcModelsInitialization() {
  InitializeIpcForDB();
  InitialIPCMainListeners();
}
