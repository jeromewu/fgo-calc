import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import IntlProvider from 'containers/IntlProvider';
import history from 'utils/history';
import Home from 'routes/Home';
import Overview from 'routes/Overview';
import * as Events from 'routes/Events';
import { initEventData } from 'routes/Events/modules/events';
import Background from 'components/Background';
import Header from 'components/Header';
import Main from 'components/Main';

const App = ({ store }) => (
  <Provider store={store}>
    <IntlProvider>
      <Background>
        <Header />
        <ConnectedRouter history={history}>
          <Main>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/:server"
              component={Overview}
            />
            <Route
              path="/:server/:eventName"
              render={(args) => {
                const Event = Events[args.match.params.eventName];
                store.dispatch(initEventData(args.location.pathname));
                return <Event {...args} />;
              }}
            />
          </Main>
        </ConnectedRouter>
      </Background>
    </IntlProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
