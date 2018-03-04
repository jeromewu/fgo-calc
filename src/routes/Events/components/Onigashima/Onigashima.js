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

const Onigashima = ({
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
      <BannerImage key="banner" src={banner[server].Onigashima} alt="Onigashima" />
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

Onigashima.propTypes = {
  server: PropTypes.string,
  event: PropTypes.object,
  data: PropTypes.object,
};

Onigashima.defaultProps = {
  server: '',
  event: {},
  data: {},
};

export default Onigashima;
