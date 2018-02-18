import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  height: 64px;
  background-color: #20232a;
  align-self: stretch;
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-left: 8px;
  margin-right: 16px;
  font-weight: bold;
  font-size: 24px;
  color: white;
`;

const Header = () => (
  <HeaderContainer>
    <Title>FGO Calc</Title>
  </HeaderContainer>
);

export default Header;
