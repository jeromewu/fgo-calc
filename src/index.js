/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import store from './store';
import registerServiceWorker from './utils/registerServiceWorker';
import './styles/index.css';

const render = () => {
  const App = require('./components/App').default;
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

if (process.env.NODE_ENV === 'development') {
  module.hot.accept(() => {
    setImmediate(() => render());
  });
}

render();

registerServiceWorker();
