import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import BannerImage from 'components/BannerImage';
import moment from 'moment';
import Countdown from './Countdown';

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
    name, banner, start, end,
  },
  onImageClick,
}) => (
  <Container>
    <h2><FormattedMessage id="TOC.current.event" /></h2>
    <div>
      {`${moment(start).format('YYYY/MM/DD HH:mm')} ~ ${moment(end).format('YYYY/MM/DD HH:mm')}`}
    </div>
    <div>
      <span><FormattedMessage id="TOC.current.time.left" />:</span>
      <span>
        <Countdown end={end} />
      </span>
    </div>
    <BannerImage src={banner} alt={name} onClick={onImageClick(server, name)} />
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
