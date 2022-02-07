import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import CustomLayout from './components/layout';
import { sidebar_config } from './utils/config';
import icon from '../../assets/icon.svg';
import './App.css';

import store from './appRedux';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <CustomLayout sidebarConfig={sidebar_config} />
      </Router>
    </Provider>
  );
}
