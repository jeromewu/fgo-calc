import React from 'react';
import PropTypes from 'prop-types';
import calendar from 'constants/calendar';
import CurrentEventPanel from '../../containers/CurrentEventPanel';
import NextEventPanel from '../../containers/NextEventPanel';
import PastEventPanel from '../../containers/PastEventPanel';

const Overview = ({
  server,
}) => {
  const now = Date.now();
  const cal = calendar[server];
  const curEvent = cal.find(({ start, end }) => start < now && now < end);
  const nextEvent = cal.find(({ start }) => now < start);
  const pastEvents = cal.filter(({ end }) => now > end);

  return [
    <CurrentEventPanel
      key="current"
      server={server}
      event={curEvent}
    />,
    <NextEventPanel
      key="next"
      server={server}
      event={nextEvent}
    />,
    <PastEventPanel
      key="past"
      server={server}
      events={pastEvents}
    />,
  ];
};

Overview.propTypes = {
  calendar: PropTypes.array,
};

Overview.defaultProps = {
  calendar: [],
};

export default Overview;
