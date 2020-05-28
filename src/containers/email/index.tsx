import React from 'react';
import {
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import { ROUTES } from '@constants';
import Send from './containers/send';
import Fail from './containers/fail';
import Success from './containers/success';
import NoMatch from '@containers/no-match';

import './index.scss';

function Email() {
  return (
    <Switch>
      <Route  path={ROUTES.Email.Send} component={Send}/>
      <Route  path={ROUTES.Email.Success} component={Success}/>
      <Route  path={ROUTES.Email.Fail} component={Fail}/>
      <Route path="*" component={NoMatch} />
    </Switch>
  );
}

export default Email;