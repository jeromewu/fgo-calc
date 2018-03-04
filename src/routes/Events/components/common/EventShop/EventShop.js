import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Card, Checkbox } from 'semantic-ui-react';
import Slider from 'rc-slider';
import shortid from 'shortid';
import filterItems from 'utils/filterItems';
import 'rc-slider/assets/index.css';
import ImageLabel from '../ImageLabel';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterCheckbox = styled(Checkbox)`
  padding: 8px;
`;

const EventShop = ({
  items,
  onQuantityUpdate,
  onFilter,
  data,
}) => ([
  <h2 key="title">
    <FormattedMessage id="Event.shop" />
  </h2>,
  <FilterContainer key="filter">
    {
      [
        { id: 'Event.exclude.gem', key: 'gem' },
        { id: 'Event.exclude.piece.monument', key: 'pm' },
      ].map(({ id, key }) => (
        <FilterCheckbox
          key={id}
          checked={data[`filter/${key}`] || false}
          label={
            <label htmlFor={id}>
              <FormattedMessage id={id} />
            </label>
          }
          onClick={onFilter(`filter/${key}`)}
          slider
        />
      ))
    }
  </FilterContainer>,
  <Card.Group centered doubling key="cards">
    {
      items
        .filter(filterItems(data))
        .map(({
          id, drop, cost, limit,
        }) => (
          <Card key={shortid.generate()}>
            <Card.Content>
              <Card.Header>
                <FormattedMessage id={id} />
              </Card.Header>
              <Card.Description>
                <ImageLabel
                  id={id}
                  text={`${limit - (data[`${drop}/${id}`] || 0)} / ${limit}`}
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
              <p><FormattedMessage id="Event.traded" /><span>{`: ${data[`${drop}/${id}`] || 0}`}</span></p>
              <Slider
                value={data[`${drop}/${id}`] || 0}
                min={0}
                max={limit}
                marks={{ [limit]: limit }}
                handleStyle={{ borderColor: 'grey' }}
                trackStyle={{ backgroundColor: 'grey' }}
                onChange={onQuantityUpdate(`${drop}/${id}`)}
              />
            </Card.Content>
          </Card>
        ))
    }
  </Card.Group>,
]);

EventShop.propTypes = {
  items: PropTypes.array,
  data: PropTypes.object,
  onQuantityUpdate: PropTypes.func,
  onFilter: PropTypes.func,
};

EventShop.defaultProps = {
  items: [],
  data: {},
  onQuantityUpdate: () => {},
  onFilter: () => () => {},
};

export default EventShop;
