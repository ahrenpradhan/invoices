import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CustomLayout from './components/layout';
import { sidebarConfig } from './utils/config';
// import icon from '../../assets/icon.svg';
import './App.css';

import store from './appRedux';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <CustomLayout sidebarConfig={sidebarConfig} />
      </Router>
    </Provider>
  );
}
