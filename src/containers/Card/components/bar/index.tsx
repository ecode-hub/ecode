import React from 'react';

import './index.scss';

interface IProps {

}

const { useEffect, useRef } = React;

function Bar(props: IProps) {
  return (
    <div id='card-bar'>bar</div>
  );
}

export {
  Bar
};