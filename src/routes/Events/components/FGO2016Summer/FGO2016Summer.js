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

const FGO2016Summer = ({
  server,
  event,
  data,
}) => {
  const {
    start, end, drops, shop, getRequired, message, bp,
  } = event;
  return (
    <Root>
      <section id="report" />
      <BannerImage key="banner" src={banner[server].FGO2016Summer} alt="FGO2016Summer" />
      <Countdown start={start} end={end} bp={bp} />
      <Report
        required={getRequired(event, data)}
        end={end}
      />
      <NoticeMessage message={message} />
      <section id="options" />
      <Divider horizontal section>◇◇◇</Divider>
      <DropGrid drops={drops} />
      <EventShop items={shop} />
      <NavButton />
    </Root>
  );
};

FGO2016Summer.propTypes = {
  server: PropTypes.string,
  event: PropTypes.object,
  data: PropTypes.object,
};

FGO2016Summer.defaultProps = {
  server: '',
  event: {},
  data: {},
};

export default FGO2016Summer;
