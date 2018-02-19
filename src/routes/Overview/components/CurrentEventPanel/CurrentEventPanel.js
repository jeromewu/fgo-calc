import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import check from 'check-types';
import banner from 'assets/images/banner';
import BannerImage from 'components/BannerImage';
import Countdown from 'components/Countdown';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 320px;
  background-color: #282c34;
  color: white;
`;

const CurrentEventPanel = ({
  server,
  event: {
    name, start, end,
  },
  onImageClick,
}) => (
  <Container>
    <h2><FormattedMessage id="TOC.current.event" /></h2>
    {
      check.undefined(name)
        ? (
          <h3><FormattedMessage id="TOC.no.event" /></h3>
        ) : ([
          <Countdown
            key="countdown"
            start={start}
            end={end}
          />,
          <BannerImage
            key="banner"
            src={banner[server][name]}
            alt={name}
            onClick={onImageClick(server, name)}
          />,
        ])
    }
  </Container>
);

CurrentEventPanel.propTypes = {
  server: PropTypes.string,
  event: PropTypes.object,
  onImageClick: PropTypes.func,
};

CurrentEventPanel.defaultProps = {
  server: '',
  event: {},
  onImageClick: () => {},
};

export default CurrentEventPanel;
