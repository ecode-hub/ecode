import React from 'react';
import {
  // HashRouter as Router, // hash 路由
  BrowserRouter as Router, // history 路由
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ROUTES } from '@constants';
import Login from './Login';
import Home from './Home';
import User from './User';
import Card from './Card';
import Browse from './Browse';
import Statistic from './Statistic';
import Notification from './Notification';
import Edit from './Edit';
import Subscribed from './Subscribed';
import Setting from './Setting';
import About from './About';
import NoMatch from './NoMatch';

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Redirect exact={true} from={ROUTES.Root} to={ROUTES.Home} />
        <Route path={ROUTES.Login} component={Login} />
        <Route path={ROUTES.Home} component={Home} />
        <Route path={ROUTES.User} component={User} />
        <Route path={ROUTES.Card} component={Card} />
        <Route path={ROUTES.Browse} component={Browse} />
        <Route path={ROUTES.Statistic} component={Statistic} />
        <Route path={ROUTES.Notification} component={Notification} />
        <Route path={ROUTES.Edit} component={Edit} />
        <Route path={ROUTES.Subscribed} component={Subscribed} />
        <Route path={ROUTES.Setting} component={Setting} />
        <Route path={ROUTES.About} component={About} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}
