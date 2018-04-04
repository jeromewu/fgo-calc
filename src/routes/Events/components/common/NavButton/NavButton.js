import React from 'react';
import { Button } from 'semantic-ui-react';
import { HashLink as Link } from 'react-router-hash-link';

const NavButton = props => ([
  <Link
    key="report"
    smooth
    to="#report"
    href={window.location.href}
  >
    <Button
      circular
      icon="newspaper"
      color="google plus"
      style={{
        position: 'absolute',
        bottom: (24 + 36 + 8),
        right: 12,
      }}
      {...props}
    />
  </Link>,
  <Link
    key="options"
    smooth
    to="#options"
    href={window.location.href}
  >
    <Button
      circular
      icon="options"
      color="facebook"
      style={{
        position: 'absolute',
        bottom: 24,
        right: 12,
      }}
      {...props}
    />
  </Link>,
]);

export default NavButton;
