import React from 'react';
import {
  Header,
  HeaderWraper
} from '@components';

import './index.scss';

function Browse() {
  return (
    <HeaderWraper>
      <Header />
      <div>browse</div>
    </HeaderWraper>
  );
}

export default Browse;