import React, { lazy, Suspense } from 'react';
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

// 懒加载，看上去效果没有直接加载好，先用直接加载，如果以后项目变大，再考虑用不用懒加载

// const Login = lazy(() => import('./Login'));
// const Home = lazy(() => import('./Home'));
// const User = lazy(() => import('./User'));
// const Card = lazy(() => import('./Card'));
// const Browse = lazy(() => import('./Browse'));
// const Statistic = lazy(() => import('./Statistic'));
// const Notification = lazy(() => import('./Notification'));
// const Edit = lazy(() => import('./Edit'));
// const Subscribed = lazy(() => import('./Subscribed'));
// const Setting = lazy(() => import('./Setting'));
// const About = lazy(() => import('./About'));
// const NoMatch = lazy(() => import('./NoMatch'));

// function Demo() {
//   <Router>
//     <Suspense fallback={<div>Loading...</div>}>
//       <Route path={ROUTES.Login} component={Login} />
//       <Route path={ROUTES.Home} component={Home} />
//     </Suspense>
//   </Router>;
// }

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
