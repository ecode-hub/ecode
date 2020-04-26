import React, { useState, useCallback } from 'react';
import { Button } from 'antd';
import {
  Markdown,
  Header,
  HeaderWraper
} from '@components';
import {
  Bar,
  BarWraper
} from './components';
import {
  ECardSide
} from '@models';

import './index.scss';


function Card() {
  const data = '# hello';

  const [side, setSide] = useState<ECardSide>();

  const onShowAnswer = () => {
    setSide(ECardSide.BOTTOM);
  };

  const onScore = (quality: number) => {
    console.log(quality);

    setSide(ECardSide.TOP);
  };

  return (
    <HeaderWraper>
      <BarWraper>
        <Header />
        <Markdown data={data} />
        <Bar
          side={side}
          showAnswer={onShowAnswer}
          score={onScore}
        />
      </BarWraper>
    </HeaderWraper>
  );
}

export default Card;