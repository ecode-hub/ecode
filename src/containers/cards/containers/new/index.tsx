import React from 'react';
import {
  Header,
  HeaderWraper
} from '@components';

import './index.scss';

function New() {
  return (
    <HeaderWraper>
      <Header />
      <div>new</div>
    </HeaderWraper>
  );
}

export default New;