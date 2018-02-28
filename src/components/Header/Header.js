import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import LangDropdown from 'containers/LangDropdown';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: #20232a;
  padding: 0px 16px 0px 16px;
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
  font-size: 24px;
  color: white;
`;

const Header = () => (
  <HeaderContainer>
    <Title>FGO Calc</Title>
    <div>
      <LangDropdown />
      <Button
        icon="question circle"
        color="black"
        onClick={() => {
          window.open('https://github.com/jeromewu/fgo-calc/issues', '_blank');
        }}
      />
    </div>
  </HeaderContainer>
);

export default Header;
