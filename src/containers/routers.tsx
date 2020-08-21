import React, { lazy, Suspense } from 'react';
import {
  HashRouter as Router, // hash 路由
  // BrowserRouter as Router, // history 路由
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ROUTES } from '@constants';

import Login from './login';
import Register from './register';
import Home from './home';
import User from './user';
import Cards from './cards';
import Practice from './practice';
import Browse from './browse';
import Statistic from './statistic';
import Notification from './notification';
import Subscribed from './subscribed';
import Setting from './setting';
import About from './about';
import Email from './email';
import ResetPassword from './reset-password';
import NoMatch from './no-match';

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
        <Route path={ROUTES.Register} component={Register} />
        <Route path={ROUTES.Home} component={Home} />
        <Route path={ROUTES.User} component={User} />
        <Route path={ROUTES.Practice} component={Practice} />
        <Route path={ROUTES.Browse} component={Browse} />
        <Route path={ROUTES.Statistic} component={Statistic} />
        <Route path={ROUTES.Notification} component={Notification} />
        <Route path={ROUTES.Subscribed} component={Subscribed} />
        <Route path={ROUTES.Setting} component={Setting} />
        <Route path={ROUTES.About} component={About} />
        <Route path={ROUTES.Email.Base} component={Email} />
        <Route path={ROUTES.Cards.Base} component={Cards} />
        <Route path={ROUTES.ResetPassword.Base} component={ResetPassword} />
        <Route path='*' component={NoMatch} />
      </Switch>
    </Router>
  );
}
