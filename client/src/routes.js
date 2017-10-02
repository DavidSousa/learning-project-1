import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import PasswordsApi from './components/PasswordsApi';
import PasswordsSocket from './components/PasswordsSocket';
import CommentBox from './components/CommentBox';
import NotFound from './components/NotFound';

/*
const CommentPage = (props) => {
  return (
    <CommentBox
      url='http://localhost:5000/api/comments'
      pollInterval={2000}
    />
  )
}
--> <Route path="/commentBox" render={CommentPage} />
*/

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/passwordsApi" component={PasswordsApi} />
    <Route path="/passwordsSocket" component={PasswordsSocket} />
    <Route path="/commentBox" component={CommentBox} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
