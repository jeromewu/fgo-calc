import React from 'react';
import PropTypes from 'prop-types';
import check from 'check-types';
import { FormattedMessage } from 'react-intl';
import { Card, Checkbox } from 'semantic-ui-react';
import styled from 'styled-components';
import ImageLabel from '../ImageLabel';

const DescContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const QuestGrid = ({
  quests,
  data,
  onItemUpdate,
  onComplete,
}) => ([
  <h2 key="title">
    <FormattedMessage id="Event.bonus.quest" />
  </h2>,
  <Card.Group key="cards" centered>
    {
      quests.map(({
        id, drops,
      }) => (
        <Card key={id}>
          <Card.Content>
            <Card.Header>
              <FormattedMessage id={id} />
            </Card.Header>
            <Card.Description>
              <DescContainer>
                {
                  drops.map(({ id: did, num }, idx) => (
                    <div key={did}>
                      <Checkbox
                        radio
                        label=""
                        value={did}
                        name={id}
                        checked={
                          (data[`${id}/value`] === did) ||
                          (check.undefined(data[`${id}/value`]) && idx === 0)
                        }
                        onChange={onItemUpdate}
                      />
                      <ImageLabel
                        id={did}
                        text={num}
                      />
                    </div>
                  ))
                }
              </DescContainer>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Checkbox
              key={id}
              checked={data[`${id}/complete`] || false}
              label={
                <label htmlFor={id}>
                  <FormattedMessage id="Event.bonus.quest.complete" />
                </label>
              }
              onClick={onComplete(`${id}/complete`)}
              slider
            />
          </Card.Content>
        </Card>
      ))
    }
  </Card.Group>,
]);

QuestGrid.propTypes = {
  quests: PropTypes.array,
  data: PropTypes.object,
  onItemUpdate: PropTypes.func,
  onComplete: PropTypes.func,
};

QuestGrid.defaultProps = {
  quests: [],
  data: {},
  onItemUpdate: () => {},
  onComplete: () => () => {},
};

export default QuestGrid;
