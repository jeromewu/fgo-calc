import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import logo from 'assets/images/logo.png';
import { LogoImage, RDiv, CenteredDiv } from './styles';

const getServers = () => ([
  {
    key: 'jp', label: <FormattedMessage id="Home.server.jp" />, path: '/jp', disabled: true,
  },
  {
    key: 'sc', label: <FormattedMessage id="Home.server.sc" />, path: '/sc', disabled: true,
  },
  {
    key: 'tc', label: <FormattedMessage id="Home.server.tc" />, path: '/tc', disabled: false,
  },
  {
    key: 'en', label: <FormattedMessage id="Home.server.en" />, path: '/en', disabled: false,
  },
]);

const HomeView = ({ style, onRoute }) => (
  <CenteredDiv style={style}>
    <LogoImage src={logo} alt="logo" />
    <h3><FormattedMessage id="Home.title" /></h3>
    <h4><FormattedMessage id="Home.server.label" /></h4>
    <RDiv>
      {
        getServers().map(({
          key, label, path, disabled,
        }) => (
          <Button
            key={key}
            content={label}
            onClick={onRoute(path)}
            disabled={disabled}
            basic
          />
        ))
      }
    </RDiv>
  </CenteredDiv>
);

HomeView.propTypes = {
  style: PropTypes.object,
  onRoute: PropTypes.func,
};

HomeView.defaultProps = {
  style: {},
  onRoute: () => () => {},
};

export default HomeView;
