import React from 'react';
import { Button } from 'semantic-ui-react';

const TopButton = props => (
  <Button
    circular
    icon="arrow up"
    style={{
      position: 'absolute',
      bottom: 32,
      right: 32,
    }}
    {...props}
  />
);

export default TopButton;
