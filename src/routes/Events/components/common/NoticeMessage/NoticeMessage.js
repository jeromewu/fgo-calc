import React from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const NoticeMessage = ({
  message,
}) => (
  <Message info>
    <Message.Header>{message.header}</Message.Header>
    {message.content}
  </Message>
);

NoticeMessage.propTypes = {
  message: PropTypes.object,
};

NoticeMessage.defaultProps = {
  message: {},
};

export default NoticeMessage;
