import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import { Card, Input } from 'semantic-ui-react';

const ConfigPanel = ({
  intl,
  maxAP,
  onMaxAPUpdate,
}) => ([
  <h2 key="title">
    <FormattedMessage id="Event.config" />
  </h2>,
  <Card.Group key="cards" centered>
    <Card key="ap">
      <Card.Content>
        <Card.Header>
          <FormattedMessage id="Event.max.ap" />
        </Card.Header>
      </Card.Content>
      <Card.Content extra>
        <Input
          fluid
          label={intl.formatMessage({ id: 'Event.ap' })}
          value={maxAP}
          onChange={onMaxAPUpdate}
        />
      </Card.Content>
    </Card>
  </Card.Group>,
]);

ConfigPanel.propTypes = {
  intl: intlShape.isRequired,
  maxAP: PropTypes.number,
  onMaxAPUpdate: PropTypes.func,
};

ConfigPanel.defaultProps = {
  maxAP: 135,
  onMaxAPUpdate: () => {},
};

export default injectIntl(ConfigPanel);
