import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image, Label } from 'semantic-ui-react';
import images from 'assets/images';

const LargeSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  padding-left: 8px;
`;

const ImageLabel = ({ id, text }) => (
  <Label>
    <Image src={images[id]} />
    <LargeSpan>{text}</LargeSpan>
  </Label>
);

ImageLabel.propTypes = {
  id: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

ImageLabel.defaultProps = {
  id: '',
  text: '',
};

export default ImageLabel;
