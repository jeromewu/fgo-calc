import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import BannerImage from 'components/BannerImage';
import Countdown from 'components/Countdown';
import banner from 'assets/images/banner';
import Root from '../common/Root';
import EventShop from '../../containers/EventShop';
import DropGrid from '../../containers/DropGrid';
import ConfigPanel from '../../containers/ConfigPanel';
import NavButton from '../common/NavButton';
import NoticeMessage from '../common/NoticeMessage';
import MultiReport from '../../containers/MultiReport';

const PrismaCauseway = ({
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
      <BannerImage key="banner" src={banner[server].PrismaCauseway} alt="PrismaCauseway" />
      <Countdown start={start} end={end} bp={bp} />
      <MultiReport
        required={getRequired(event, data)}
        end={end}
      />
      <NoticeMessage message={message} />
      <section id="options" />
      <Divider horizontal section>◇◇◇</Divider>
      <ConfigPanel />
      <DropGrid drops={drops} />
      <EventShop items={shop} />
      <NavButton />
    </Root>
  );
};

PrismaCauseway.propTypes = {
  server: PropTypes.string,
  event: PropTypes.object,
  data: PropTypes.object,
};

PrismaCauseway.defaultProps = {
  server: '',
  event: {},
  data: {},
};

export default PrismaCauseway;
