import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import PasswordsApi from './components/PasswordsApi';
import PasswordsSocket from './components/PasswordsSocket';
import CommentBox from './components/CommentBox';
import NotFound from './components/NotFound';

import PrivateRoute from './require_auth';

const Routes = () =>
  (
    <Switch>
      <Route exact path="/" component={App} />
      <Route
        path="/passwordsApi"
        component={() => {
          return (
            <PrivateRoute>
              <PasswordsApi />
            </PrivateRoute>
          );
        }}
      />
      <Route path="/passwordsSocket" component={PasswordsSocket} />
      <Route path="/commentBox" component={CommentBox} />
      <Route path="*" component={NotFound} />
    </Switch>
  );

export default Routes;
