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
    const topStyle = { display: side === ECardSide.TOP ? 'inherit' : 'none' };
    const bottomStyle = { display: side === ECardSide.BOTTOM ? 'inherit' : 'none' };
    return (
      <Fragment>
        <Button onClick={showAnswer} style={topStyle}>显示答案</Button>
        <Button onClick={() => score(1)} style={bottomStyle}>生疏/错误</Button>
        <Button onClick={() => score(2)} style={bottomStyle}>困难/模糊</Button>
        <Button onClick={() => score(3)} style={bottomStyle}>犹豫/想起</Button>
        <Button onClick={() => score(4)} style={bottomStyle}>顺利/正确</Button>
      </Fragment>
    );
    // 采用上面这种写法而没有采用下面这种写法是为了处理 antd button 切换后第一个按钮依然 hover 的问题
    //
    // if (side === ECardSide.TOP) {
    //   return (
    //     <Button onClick={showAnswer}>显示答案</Button>
    //   );
    // }
    // return (
    //   <Fragment>
    //     <Button onClick={() => score(1)}>生疏/错误</Button>
    //     <Button onClick={() => score(2)}>困难/模糊</Button>
    //     <Button onClick={() => score(3)}>犹豫/想起</Button>
    //     <Button onClick={() => score(4)}>顺利/正确</Button>
    //   </Fragment>
    // );
  };

  return (
    <div id='card-bar'>
      <div id='card-bar-buttoms-container'>
        {renderButtoms()}
      </div>
    </div>
  );
}

export {
  Bar
};