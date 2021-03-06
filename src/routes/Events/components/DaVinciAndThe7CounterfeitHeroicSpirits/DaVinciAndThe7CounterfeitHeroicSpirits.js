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
import QuestGrid from '../../containers/QuestGrid';
import NavButton from '../common/NavButton';
import NoticeMessage from '../common/NoticeMessage';
import Report from '../../containers/Report';

const DaVinciAndThe7CounterfeitHeroicSpirits = ({
  server,
  event,
  data,
}) => {
  const {
    start, end, drops, shop, getRequired, message,
  } = event;
  const required = getRequired(event, data);
  return (
    <Root>
      <section id="report" />
      <BannerImage key="banner" src={banner[server].DaVinciAndThe7CounterfeitHeroicSpirits} alt="DaVinciAndThe7CounterfeitHeroicSpirits" />
      <Countdown start={start} end={end} />
      <Report
        required={required}
        end={end}
      />
      <Divider horizontal section>◇◇◇</Divider>
      <section id="options" />
      <ConfigPanel />
      <DropGrid drops={drops} />
      <QuestGrid quests={required.bonusQuests} />
      <NoticeMessage message={message} />
      <EventShop items={shop} />
      <NavButton />
    </Root>
  );
};

DaVinciAndThe7CounterfeitHeroicSpirits.propTypes = {
  server: PropTypes.string,
  event: PropTypes.object,
  data: PropTypes.object,
};

DaVinciAndThe7CounterfeitHeroicSpirits.defaultProps = {
  server: '',
  event: {},
  data: {},
};

export default DaVinciAndThe7CounterfeitHeroicSpirits;
