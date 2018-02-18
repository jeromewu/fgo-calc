import React from 'react';
import Header from 'components/Header';
import CurrentEventPanel from 'components/CurrentEventPanel';
import NextEventPanel from 'components/NextEventPanel';
import PastEventPanel from 'components/PastEventPanel';
import events from 'constants/tc-events';

const TCView = () => ([
  <Header key="header" />,
  <CurrentEventPanel key="current" event={events.goWest} />,
  <NextEventPanel key="next" event={events.onigashima} />,
  <PastEventPanel key="past" />,
]);

export default TCView;
