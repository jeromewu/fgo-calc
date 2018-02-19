import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Card } from 'semantic-ui-react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ImageLabel from '../ImageLabel';

const EventShop = ({
  items,
}) => ([
  <h2 key="title">
    <FormattedMessage id="Event.shop" />
  </h2>,
  <Card.Group centered doubling key="cards">
    {
      items.map(({
        id, drop, cost, limit,
      }) => (
        <Card key={id}>
          <Card.Content>
            <Card.Header>
              <FormattedMessage id={id} />
            </Card.Header>
            <Card.Description>
              <ImageLabel
                id={id}
                text={`${limit} / ${limit}`}
              />
              <ImageLabel
                id={drop}
                text={cost}
              />
            </Card.Description>
          </Card.Content>
          <Card.Content
            extra
            style={{ paddingBottom: 32 }}
          >
            <p><FormattedMessage id="Event.traded" /></p>
            <Slider
              min={0}
              max={limit}
              marks={{ [limit]: limit }}
              handleStyle={{ borderColor: 'grey' }}
              trackStyle={{ backgroundColor: 'grey' }}
            />
          </Card.Content>
        </Card>
      ))
    }
  </Card.Group>,
]);

EventShop.propTypes = {
  items: PropTypes.array,
};

EventShop.defaultProps = {
  items: [],
};

export default EventShop;
