import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { ROUTES } from '@constants';
import NewPwd from './containers/new-pwd';
import SendEmail from './containers/send-email';
import Success from './containers/success';
import EnterAccount from './containers/enter-account';
import NoMatch from '@containers/no-match';

import './index.scss';

function Email() {
  return (
    <Switch>
      <Route path={ROUTES.ResetPassword.NewPwd} component={NewPwd}/>
      <Route path={ROUTES.ResetPassword.EnterAccount} component={EnterAccount}/>
      <Route path={ROUTES.ResetPassword.SendEmail} component={SendEmail}/>
      <Route path={ROUTES.ResetPassword.Success} component={Success}/>
      <Route path='*' component={NoMatch} />
    </Switch>
  );
}

export default Email;