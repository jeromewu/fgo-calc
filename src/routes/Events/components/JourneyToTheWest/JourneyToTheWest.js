import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import BannerImage from 'components/BannerImage';
import Countdown from 'components/Countdown';
import banner from 'assets/images/banner';
import Root from '../common/Root';
import EventShop from '../../containers/EventShop';
import DropGrid from '../../containers/DropGrid';
import NavButton from '../common/NavButton';
import NoticeMessage from '../common/NoticeMessage';
import Report from '../common/Report';

const JourneyToTheWest = ({
  server,
  event,
  data,
}) => {
  const {
    start, end, drops, shop, getRequired, message,
  } = event;
  return (
    <Root>
      <section id="report" />
      <BannerImage key="banner" src={banner[server].JourneyToTheWest} alt="JourneyToTheWest" />
      <Countdown start={start} end={end} />
      <Report
        required={getRequired(event, data)}
        end={end}
      />
      <section id="options" />
      <Divider horizontal section>◇◇◇</Divider>
      <DropGrid drops={drops} />
      <NoticeMessage message={message} />
      <EventShop items={shop} />
      <NavButton />
    </Root>
  );
};

JourneyToTheWest.propTypes = {
  server: PropTypes.string,
  event: PropTypes.object,
  data: PropTypes.object,
};

JourneyToTheWest.defaultProps = {
  server: '',
  event: {},
  data: {},
};

export default JourneyToTheWest;
