import React from 'react';

interface IProps {
}

function Wraper(props: React.PropsWithChildren<IProps>) {
  return (
    <div id='wraper'>
      {props.children}
    </div>
  );
}

export {
  Wraper
};