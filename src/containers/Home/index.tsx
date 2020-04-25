import React from 'react';
import {
  Header,
  HeaderWraper
} from '@components';

import './index.scss';

function Home() {
  return (
    <HeaderWraper>
      <Header />
      <div>Hello ECode!</div>
    </HeaderWraper>
  );
}

export default Home;