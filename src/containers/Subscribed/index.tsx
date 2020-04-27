import React from 'react';
import {
  Header,
  HeaderWraper
} from '@components';

import './index.scss';

function Subscribed() {
  return (
    <HeaderWraper>
      <Header />
      <div>subscribed</div>
    </HeaderWraper>
  );
}

export default Subscribed;