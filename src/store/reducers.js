import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { intlReducer } from 'react-intl-redux';
import { configReducer } from 'modules/config';
import { eventsReducer } from 'routes/Events/modules/events';

export default combineReducers({
  config: configReducer,
  events: eventsReducer,
  router: routerReducer,
  intl: intlReducer,
});
