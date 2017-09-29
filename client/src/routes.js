import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import PasswordsApi from './components/PasswordsApi';
import PasswordsSocket from './components/PasswordsSocket';
import NotFound from './components/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/passwordsApi" component={PasswordsApi} />
    <Route path="/passwordsSocket" component={PasswordsSocket} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
