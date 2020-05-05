import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import SalaryService from './services/salary-service';
import  { SalaryServiceProvider} from './components/salary-service-context';

import store from './store';

const salaryService = new SalaryService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <SalaryServiceProvider value={salaryService}>
        <Router>
          <App />
        </Router>
      </SalaryServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
