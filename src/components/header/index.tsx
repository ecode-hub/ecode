import React from 'react';

import './index.scss';

interface IProps {

}

const { useEffect, useRef } = React;

function Header(props: IProps) {
  return (
    <header id='ecode-header'>header</header>
  );
}

export {
  Header
};