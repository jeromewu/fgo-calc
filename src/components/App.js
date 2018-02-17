import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
import media from '../utils/media';
import Background from './Background';
import logo from '../assets/images/logo.png';

const LogoImage = styled.img`
  width: 90%;
  max-width: 551px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  ${media.phone`
    flex-direction: column;
  `}
`;

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
