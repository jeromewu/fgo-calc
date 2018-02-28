import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import banner from 'assets/images/banner';
import BannerImage from 'components/BannerImage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #282c34;
  color: white;
  padding-top: 80px;
`;

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const PaddingBannerImage = styled(BannerImage)`
  padding: 16px;
`;

const PastEventPanel = ({
  server,
  events,
  onImageClick,
}) => (
  <Container>
    <h2><FormattedMessage id="TOC.past.event" /></h2>
    <BannerContainer>
      {
        events.map(({ name }) => (
          <PaddingBannerImage
            key={name}
            src={banner[server][name]}
            alt={name}
            onClick={onImageClick(server, name)}
          />
        ))
      }
    </BannerContainer>
  </Container>
);

PastEventPanel.propTypes = {
  server: PropTypes.string,
  events: PropTypes.array,
  onImageClick: PropTypes.func,
};

PastEventPanel.defaultProps = {
  server: PropTypes.string,
  events: [],
  onImageClick: () => () => {},
};

export default PastEventPanel;
