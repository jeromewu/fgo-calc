import React from 'react';
import Header from 'components/Header';
import CurrentEventPanel from 'components/CurrentEventPanel';
import goWest from 'assets/images/tc/events/go-west.png';
import { BannerImage } from './styles';

const TCView = () => ([
  <Header key="header" />,
  <CurrentEventPanel key="current">
    <h1>Current Event:</h1>
    <BannerImage src={goWest} alt="go-west" />
  </CurrentEventPanel>,
]);

export default TCView;
