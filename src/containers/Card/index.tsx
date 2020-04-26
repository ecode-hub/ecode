import React, { useState, useCallback, useEffect, Fragment } from 'react';
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
  ECardSide,
  ICard
} from '@models';
import {
  data
} from './_mock';

import './index.scss';

function Card() {
  const [side, setSide] = useState<ECardSide>(ECardSide.TOP);
  const [cardData, setCardData] = useState<ICard[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const currentCard = cardData[currentCardIndex];

  useEffect(() => {
    // TODO: 获取后端数据
    setTimeout(() => {
      if (data.length) {
        setCardData(data);
      }
    });
  }, []);

  const onShowAnswer = () => {
    setSide(ECardSide.BOTTOM);
  };

  const onScore = (quality: number) => {
    console.log(quality);
    if (cardData.length - 1 > currentCardIndex) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0);
    }
    setSide(ECardSide.TOP);
  };

  const renderMarkdown = () => {
    if (currentCard) {
      if (side === ECardSide.TOP) {
        return <Markdown data={currentCard.question} />;
      } else {
        return (
          <Fragment>
            <Markdown data={currentCard.question} />
            <div className='horizontal-line'></div>
            <Markdown data={currentCard.answer} />
          </Fragment>
        );
      }
    } else {
      return '加载中';
    }
  };

  return (
    <HeaderWraper>
      <BarWraper>
        <Header />
        <div id='main-card'>
          <div id='markdown-container'>
            {renderMarkdown()}
          </div>
        </div>
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