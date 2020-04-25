import React from 'react';
import { Button } from 'antd';
import {
  Markdown,
  Header,
  HeaderWraper
} from '@components';

import './index.scss';

function Card() {
  const data = '# hello';

  return (
    <HeaderWraper>
      <Header />
      <div>card page</div>
      <Markdown data={data} />
      <Button type='primary'>按钮</Button>
    </HeaderWraper>
  );
}

export default Card;