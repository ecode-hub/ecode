import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
ReactDOM.render(<App />, document.getElementById('root'));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (typeof (module as any).hot !== 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (module as any).hot.accept('./app', () => {
    console.log('Accepting the updated module!');
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}