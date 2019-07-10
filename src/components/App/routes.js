import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Form1 from 'pages/Form1';
import Login from 'pages/Login';

const history = createBrowserHistory();

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Form1} />
      <Route exact path="/form1" component={Form1} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
