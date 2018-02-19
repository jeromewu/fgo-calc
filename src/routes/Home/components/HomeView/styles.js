import styled from 'styled-components';
import media from 'utils/media';

export const RDiv = styled.div`
  display: flex;
  flex-direction: row;

  ${media.phone`
    flex-direction: column;
  `}
`;

export const LogoImage = styled.img`
  width: 90%;
  max-width: 551px;
`;

export const CenteredDiv = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
