import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { intlReducer } from 'react-intl-redux';
import { configReducer } from 'modules/config';

export default combineReducers({
  config: configReducer,
  router: routerReducer,
  intl: intlReducer,
});
