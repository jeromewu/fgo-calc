import styled from 'styled-components';
import media from 'utils/media';

export default styled.div`
  display: flex;
  flex-direction: row;

  ${media.phone`
    flex-direction: column;
  `}
`;
