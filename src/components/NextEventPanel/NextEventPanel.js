import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
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

const NextEventPanel = ({ event: { name, banner } }) => (
  <Container>
    <h2><FormattedMessage id="TOC.next.event" /></h2>
    <BannerImage src={banner} alt={name} />
  </Container>
);

NextEventPanel.propTypes = {
  event: PropTypes.object,
};

NextEventPanel.defaultProps = {
  event: {},
};

export default NextEventPanel;
