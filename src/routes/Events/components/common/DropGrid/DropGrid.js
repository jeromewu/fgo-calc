import React from 'react';
import { FormattedMessage, injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import { Card, Image, Input, Label, Dropdown } from 'semantic-ui-react';
import images from 'assets/images';

const genOptions = {
  ADD: (min, max, step) => Array(((max - min) / step) + 1).fill(0).map((_, idx) => ({
    key: idx,
    text: min + (idx * step),
    value: min + (idx * step),
  })),
  MUL: (min, max, step) => Array(((max - min) / step) + 1).fill(0).map((_, idx) => ({
    key: idx,
    text: `${Math.round((min + ((idx * step) - 1)) * 100)} %`,
    value: min + (idx * step),
  })),
};

const DropGrid = ({
  drops,
  data,
  intl,
  onQuantityUpdate,
}) => ([
  <h2 key="title">
    <FormattedMessage id="Event.drops" />
  </h2>,
  <Card.Group key="cards" centered>
    {
      drops.map(({
        id, type, min, max, step,
      }) => (
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
              value={data[`${id}/owned`]}
              onChange={onQuantityUpdate(`${id}/owned`)}
            />
            <Label pointing>
              e.g. 100, 50+50, 100 + (5 * 20), ...
            </Label>
          </Card.Content>
          <Card.Content extra>
            <Label size="large">
              {intl.formatMessage({ id: 'Event.bonus' })}
            </Label>
            <Dropdown
              value={data[`${id}/bonus`]}
              onChange={onQuantityUpdate(`${id}/bonus`, type === 'ADD')}
              options={genOptions[type](min, max, step)}
              selection
              scrolling
              compact
            />
          </Card.Content>
        </Card>
      ))
    }
  </Card.Group>,
]);

DropGrid.propTypes = {
  drops: PropTypes.array,
  data: PropTypes.object,
  intl: intlShape.isRequired,
  onQuantityUpdate: PropTypes.func,
};

DropGrid.defaultProps = {
  drops: [],
  data: {},
  onQuantityUpdate: () => {},
};

export default injectIntl(DropGrid);
