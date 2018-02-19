import React from 'react';
import PropTypes from 'prop-types';
import BannerImage from 'components/BannerImage';
import Countdown from 'components/Countdown';
import banner from 'assets/images/banner';
import Root from '../common/Root';
import EventShop from '../common/EventShop';

const JourneyToTheWest = ({
  server,
  event: {
    start, end, shop,
  },
}) => (
  <Root>
    <BannerImage key="banner" src={banner[server].JourneyToTheWest} alt="JourneyToTheWest" />
    <Countdown start={start} end={end} />
    <EventShop items={shop} />
  </Root>
);

JourneyToTheWest.propTypes = {
  server: PropTypes.string,
  event: PropTypes.object,
};

JourneyToTheWest.defaultProps = {
  server: '',
  event: {},
};

export default JourneyToTheWest;
