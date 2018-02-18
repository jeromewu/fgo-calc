import styled from 'styled-components';

const fromColor = 'rgba(0, 0, 0, 0)';
const toColor = 'rgba(0, 0, 0, 0.02)';

export default styled.div`
  flex: 1;
  overflowX: auto;
  background-color: ${fromColor};
  background-image: linear-gradient(
    45deg,
    ${fromColor} 25%,
    ${toColor} 25%,
    ${toColor} 75%,
    ${fromColor} 75%,
    ${fromColor}
  ),
  linear-gradient(
    -45deg,
    ${fromColor} 25%,
    ${toColor} 25%,
    ${toColor} 75%,
    ${fromColor} 75%,
    ${fromColor}
  );
  background-size: 50px 50px;
`;
