import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ModalWindow from '../modal';

import Header from '../header';
import { HomePage, CartPage } from '../pages';
import { EmployeePage, NewEmployeePage } from '../pages/admin';
import AccountantPage from '../pages/accountant';
import ProfilePage from '../pages/employee';
import Login from '../auth/login';
import Register from '../auth/register';

//import { withSalaryService } from '../hoc';


const App = () => {
  
  return (
    <main role="main" className="container">
      <Header />
      <Switch>
        <Route
          path="/login"
          component={Login}
          exact />

        <Route
          path="/register"
          component={Register}
          exact />
          
        <Route
          path="/"
          component={HomePage}
          exact />

        <Route
          path="/cart"
          component={CartPage}
          />

        <Route
          path="/admin/employee/"
          component={EmployeePage}
          />

        <Route
          path="/admin/newemployee/"
          component={NewEmployeePage}
          />

        <Route
          path="/accountant/"
          component={AccountantPage}
          />

        <Route
          path="/employee/"
          component={ProfilePage}
          />
          
          <Route render={() => <h2>Page not found</h2>} />
      </Switch>
      <ModalWindow />
    </main>
    );
};

export default App;