import React from 'react';
import {
  Header,
  HeaderWraper
} from '@components';

import './index.scss';

function Notification() {
  return (
    <HeaderWraper>
      <Header />
      <div>notification</div>
    </HeaderWraper>
  );
}

export default Notification;