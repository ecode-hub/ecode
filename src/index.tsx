import React from 'react';
import ReactDOM from 'react-dom';
import App from '@containers/App/index';
ReactDOM.render(<App />, document.getElementById('root'));

if (typeof (module as any).hot !== 'undefined') {
  (module as any).hot.accept('@containers/App/index', () => {
    console.log('Accepting the updated module!');
    ReactDOM.render(<App />, document.getElementById('root'));
  });
}