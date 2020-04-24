import React from 'react';

import './index.scss';

interface Iprops {

}

const { useEffect, useRef } = React;

function Header(props: Iprops) {
  return (
    <header id='ecode-header'>header</header>
  );
}

export default Header;