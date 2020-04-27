import React from 'react';
import {
  Header,
  HeaderWraper
} from '@components';

import './index.scss';

function User() {
  return (
    <HeaderWraper>
      <Header />
      <div>user</div>
    </HeaderWraper>
  );
}

export default User;