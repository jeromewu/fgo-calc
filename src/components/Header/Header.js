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

const blackBg = {
  backgroundColor: '#20232a',
};

const Header = () => (
  <HeaderContainer>
    <Button
      secondary
      size="big"
      style={blackBg}
      onClick={() => {
        window.open('https://jeromewu.github.io/fgo-calc/', '_self');
      }}
    >
      FGO Calc
    </Button>
    <div>
      <LangDropdown />
      <Button
        secondary
        icon="question circle"
        style={blackBg}
        onClick={() => {
          window.open('https://github.com/jeromewu/fgo-calc/issues', '_blank');
        }}
      />
    </div>
  </HeaderContainer>
);

export default Header;
