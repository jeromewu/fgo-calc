import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import BannerImage from 'components/BannerImage';
import Countdown from 'components/Countdown';
import banner from 'assets/images/banner';
import Root from '../common/Root';
import EventShop from '../common/EventShop';
import DropGrid from '../common/DropGrid';
import TopButton from '../common/TopButton';
import Report from '../common/Report';

const JourneyToTheWest = ({
  server,
  event,
}) => {
  const {
    start, end, drops, shop,
  } = event;
  return (
    <Root>
      <section id="top" />
      <BannerImage key="banner" src={banner[server].JourneyToTheWest} alt="JourneyToTheWest" />
      <Countdown start={start} end={end} />
      <Report event={event} />
      <Divider horizontal section>◇◇◇</Divider>
      <DropGrid drops={drops} />
      <EventShop items={shop} />
      <TopButton />
    </Root>
  );
};

JourneyToTheWest.propTypes = {
  server: PropTypes.string,
  event: PropTypes.object,
};

JourneyToTheWest.defaultProps = {
  server: '',
  event: {},
};

export default JourneyToTheWest;
