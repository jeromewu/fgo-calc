import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from 'utils/history';
import Home from 'routes/Home';
import TC from 'routes/TC';
import tcEventData from 'constants/tc-events';
import * as Events from 'events/index';
import Background from 'components/Background';
import LangDropdown from 'containers/LangDropdownContainer';

const App = ({ store }) => (
  <Provider store={store}>
    <IntlProvider>
      <ConnectedRouter history={history}>
        <Background>
          <LangDropdown />
          <Route exact path="/" component={Home} />
          <Route exact path="/tc" component={TC} />
          <Route
            path="/tc/:eventName"
            render={({ match: { params: { eventName } } }) => {
              const Event = Events[eventName];
              return <Event event={tcEventData[eventName]} />;
            }}
          />
        </Background>
      </ConnectedRouter>
    </IntlProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
