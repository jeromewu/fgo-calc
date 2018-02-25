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
  height: 320px;
  background-color: transparent;
  color: black;
`;

const NextEventPanel = ({
  server,
  event: { name },
  onImageClick,
}) => (
  <Container>
    <h2><FormattedMessage id="TOC.next.event" /></h2>
    <BannerImage
      src={banner[server][name]}
      alt={name}
      onClick={onImageClick(server, name)}
    />
  </Container>
);

NextEventPanel.propTypes = {
  server: PropTypes.string,
  event: PropTypes.object,
  onImageClick: PropTypes.func,
};

NextEventPanel.defaultProps = {
  server: PropTypes.string,
  event: {},
  onImageClick: () => () => {},
};

export default NextEventPanel;
