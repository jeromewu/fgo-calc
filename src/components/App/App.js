import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from 'utils/history';
import Home from 'routes/Home';
import TC from 'routes/TC';
import Background from 'components/Background';
import LangDropdown from 'containers/LangDropdownContainer';

const App = ({ store }) => (
  <Provider store={store}>
    <IntlProvider>
      <ConnectedRouter history={history}>
        <Background>
          <LangDropdown />
          <Route exact path="/" component={Home} />
          <Route path="/tc" component={TC} />
        </Background>
      </ConnectedRouter>
    </IntlProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
