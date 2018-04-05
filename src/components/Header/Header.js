import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import LangDropdown from 'containers/LangDropdown';
import pkg from '../../../package.json';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  background-color: #20232a;
  padding: 0px 16px 0px 16px;
  color: white;
`;

const Version = styled.span`
  font-size: 10px;
  margin-left: 4px;
`;

const TitleButton = styled(Button).attrs({
  style: {
    backgroundColor: '#20232a',
    paddingRight: 0,
    paddingLeft: 0,
  },
})``;

const Header = () => (
  <HeaderContainer>
    <div>
      <TitleButton
        secondary
        size="big"
        onClick={() => {
          window.open('https://jeromewu.github.io/fgo-calc/', '_self');
        }}
      >
        FGO Calc
      </TitleButton>
      <Version>{`v${pkg.version}`}</Version>
    </div>
    <div>
      <LangDropdown />
      <TitleButton
        secondary
        icon="question circle"
        onClick={() => {
          window.open('https://github.com/jeromewu/fgo-calc/issues', '_blank');
        }}
      />
    </div>
  </HeaderContainer>
);

export default Header;
