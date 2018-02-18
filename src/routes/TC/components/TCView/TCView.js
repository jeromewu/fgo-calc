import React from 'react';
import Header from 'components/Header';
import CurrentEventPanelContainer from 'containers/CurrentEventPanelContainer';
import NextEventPanel from 'components/NextEventPanel';
import PastEventPanel from 'components/PastEventPanel';
import events from 'constants/tc-events';

const TCView = () => ([
  <Header key="header" />,
  <CurrentEventPanelContainer key="current" server="tc" event={events.GoWest} />,
  <NextEventPanel key="next" event={events.Onigashima} />,
  <PastEventPanel key="past" />,
]);

export default TCView;
