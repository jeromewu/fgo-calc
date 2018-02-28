import React from 'react';
import check from 'check-types';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

const NoticeMessage = ({
  message: { header, content },
}) => (
  check.emptyString(header) || check.undefined(header)
    ? null
    : (
      <Message info>
        <Message.Header>{header}</Message.Header>
        {content}
      </Message>
    )
);

NoticeMessage.propTypes = {
  message: PropTypes.object,
};

NoticeMessage.defaultProps = {
  message: {},
};

export default NoticeMessage;
