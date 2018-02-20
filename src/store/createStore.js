/* eslint-disable no-underscore-dangle */
/* eslint-disable global-require */
import {
  applyMiddleware,
  createStore,
  compose,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import history from 'utils/history';
import en from 'assets/locales/en.json';
import reducers from './reducers';

const defaultInitialState = {
  intl: {
    locale: 'en',
    messages: en,
  },
};

export default (initialState = {}) => {
  const middlewares = [thunk, routerMiddleware(history)];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  const store = createStore(
    reducers,
    { ...defaultInitialState, ...initialState },
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  if (process.env.NODE_ENV === 'development') {
    module.hot.accept('./reducers', () => {
      const nextReducers = require('./reducers').default;
      store.replaceReducer(nextReducers);
    });
  }

  return store;
};
