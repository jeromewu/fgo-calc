import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import { Card, Image, Input } from 'semantic-ui-react';
import images from 'assets/images';

const DropGrid = ({
  drops,
  intl,
}) => ([
  <h2 key="title">
    <FormattedMessage id="Event.drops" />
  </h2>,
  <Card.Group key="cards" centered>
    {
      drops.map(({ id }) => (
        <Card key={id}>
          <Card.Content>
            <Image floated="right" size="mini" src={images[id]} alt={id} />
            <Card.Header>
              <FormattedMessage id={id} />
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            <Input
              fluid
              label={intl.formatMessage({ id: 'Event.owned' })}
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </Card.Content>
          <Card.Content extra>
            <Input
              fluid
              label={intl.formatMessage({ id: 'Event.bonus' })}
              inputMode="numeric"
              pattern="[0-9]*"
            />
          </Card.Content>
        </Card>
      ))
    }
  </Card.Group>,
]);

DropGrid.propTypes = {
  drops: PropTypes.array,
  intl: intlShape.isRequired,
};

DropGrid.defaultProps = {
  drops: [],
};

export default injectIntl(DropGrid);
