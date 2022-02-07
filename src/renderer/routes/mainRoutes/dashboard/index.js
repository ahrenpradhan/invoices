import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [data, setData] = useState(false);
  useEffect(() => {
    window.api.receiveOnce('file:get', (data) => {
      // console.log(`Received ${data} from main process`);
      console.log(data);
    });
    window.api.send('dialog:open', 'file:get');
  }, []);
  return <>Dashboard</>;
};

export default Dashboard;
