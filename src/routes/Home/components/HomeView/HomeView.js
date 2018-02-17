import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import logo from 'assets/images/logo.png';
import { LogoImage, RDiv, CenteredDiv } from './styles';

const getServers = () => ([
  {
    key: 'jp', label: 'Japan', path: '/jp', disabled: true,
  },
  {
    key: 'sc', label: 'Simplified Chinese', path: '/sc', disabled: true,
  },
  {
    key: 'tc', label: 'Traditional Chinese', path: '/tc', disabled: false,
  },
  {
    key: 'en', label: 'English', path: '/en', disabled: true,
  },
]);

const HomeView = ({ style, onRoute }) => (
  <CenteredDiv style={style}>
    <LogoImage src={logo} alt="logo" />
    <h3><FormattedMessage id="Home.title" /></h3>
    <h4>Select server:</h4>
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
