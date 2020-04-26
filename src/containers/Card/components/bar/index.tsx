import React, { Fragment } from 'react';
import { Button } from 'antd';
import {
  ECardSide
} from '@models';

import './index.scss';

interface IProps {
  side: ECardSide, // 当前问题卡的方向，正面还是反面
  showAnswer(): void, // 显示问题方法
  score(quality: number): void, // 评分方法
}

function Bar({
  side = ECardSide.TOP,
  showAnswer,
  score
}: IProps) {
  const renderButtoms = () => {
    if (side === ECardSide.TOP) {
      return (
        <Button onClick={showAnswer}>显示答案</Button>
      );
    }
    return (
      <Fragment>
        <Button onClick={() => score(1)}>生疏/错误</Button>
        <Button onClick={() => score(2)}>困难/模糊</Button>
        <Button onClick={() => score(3)}>犹豫/想起</Button>
        <Button onClick={() => score(4)}>顺利/正确</Button>
      </Fragment>
    );
  };

  return (
    <div id='card-bar'>
      {renderButtoms()}
    </div>
  );
}

export {
  Bar
};