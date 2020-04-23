import React from "react";
import {
  // HashRouter as Router, // hash 路由
  BrowserRouter as Router, // history 路由
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { ROUTES } from '@constants';
import Home from './Home';
import Login from './Login';

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Redirect exact={true} from={ROUTES.Root} to={ROUTES.Home} />
        <Route exact={true} path={ROUTES.Home} component={Home} />
        <Route exact={true} path={ROUTES.Login} component={Login} />
      </Switch>
    </Router>
  );
}
