import React from 'react';
import { Button } from 'semantic-ui-react';
import logo from 'assets/images/logo.png';
import Background from 'components/Background';
import LogoImage from './LogoImage';
import Buttons from './Buttons';

const App = () => (
  <Background>
    <LogoImage src={logo} alt="logo" />
    <h3>Event Calculator</h3>
    <h4>Select server:</h4>
    <Buttons>
      <Button basic content="Japan" />
      <Button basic content="Simplified Chinese" />
      <Button basic content="Traditional Chinese" />
      <Button basic content="English" />
    </Buttons>
  </Background>
);

export default App;
