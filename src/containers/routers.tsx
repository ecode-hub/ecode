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
import Card from './Card';
import NoMatch from './NoMatch';

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Redirect exact={true} from={ROUTES.Root} to={ROUTES.Home} />
        <Route path={ROUTES.Home} component={Home} />
        <Route path={ROUTES.Login} component={Login} />
        <Route path={ROUTES.Card} component={Card} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}
