import React from 'react';
import { Markdown } from '@components';
import { Button } from 'antd';
import './index.scss';

function Card() {
  const data = '# hello';

  return (
    <div>
      <div>card page</div>
      <Markdown data={data} />
      <Button type='primary'>按钮</Button>
    </div>
  );
}

export default Card;