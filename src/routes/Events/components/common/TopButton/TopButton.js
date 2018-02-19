import React from 'react';
import { Button } from 'semantic-ui-react';
import { HashLink as Link } from 'react-router-hash-link';

const TopButton = props => (
  <Link smooth to="#top" href={window.location.href}>
    <Button
      circular
      icon="arrow up"
      color="google plus"
      style={{
        position: 'absolute',
        bottom: 32,
        right: 32,
      }}
      {...props}
    />
  </Link>
);

export default TopButton;
