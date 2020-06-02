import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { ROUTES } from '@constants';
import Edit from './containers/edit';
import New from './containers/new';
import NoMatch from '@containers/no-match';

import './index.scss';

function Cards() {
  return (
    <div>cards</div>
  );
}

function CardsRouter() {
  return (
    <Switch>
      <Route exact path={ROUTES.Cards.Base} component={Cards}/>
      <Route path={ROUTES.Cards.Edit} component={Edit}/>
      <Route path={ROUTES.Cards.New} component={New}/>
      <Route path="*" component={NoMatch} />
    </Switch>
  );
}

export default CardsRouter;