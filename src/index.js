/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import createStore from './store';
import registerServiceWorker from './utils/registerServiceWorker';
import setup from './setup';
import './styles/index.css';

const store = createStore();

setup();

const render = () => {
  const App = require('./components/App').default;
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
};

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./components/App', () => {
    setImmediate(() => render());
  });
}

render();

registerServiceWorker();
