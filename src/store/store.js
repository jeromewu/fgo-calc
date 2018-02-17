/* eslint-disable no-underscore-dangle */
import {
  applyMiddleware,
  createStore,
  combineReducers,
  compose,
} from 'redux';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import history from 'utils/history';

const initialState = {};
const middlewares = [routerMiddleware(history)];
let composeEnhancers = compose;

if (process.env.NODE_ENV === 'development') {
  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
}

export default createStore(
  combineReducers({
    router: routerReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(...middlewares)),
);
