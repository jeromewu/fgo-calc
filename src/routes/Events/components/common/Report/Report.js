import React from 'react';
import PropTypes from 'prop-types';
import { Card, Statistic, Image } from 'semantic-ui-react';
import check from 'check-types';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import images from 'assets/images';
import ImageLabel from '../ImageLabel';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Report = ({
  event: {
    drops, shop, quests,
  },
}) => ([
  <h2 key="title">
    <FormattedMessage id="Event.progress.report" />
  </h2>,
  <h3 key="remain-title">
    To clear the shop, you still need
  </h3>,
  <Statistic.Group key="remain" size="small" horizontal>
    {
      drops.map(({ id }) => (
        <Statistic
          key={id}
        >
          <Statistic.Value>
            {
              shop
                .filter(({ drop }) => drop === id)
                .reduce((sum, { limit, cost }) => sum + (limit * cost), 0)
            }
          </Statistic.Value>
          <Statistic.Label>
            <Center>
              <Image src={images[id]} alt={id} />
            </Center>
          </Statistic.Label>
        </Statistic>
      ))
    }
  </Statistic.Group>,
  <h3 key="quests-title">
    You need to farm
  </h3>,
  <Card.Group key="quests" centered>
    {
      quests.map(({ id: qid, drops: qdrops }) => (
        <Card key={qid}>
          <Card.Content>
            <Card.Header>
              {qid}
            </Card.Header>
          </Card.Content>
          <Card.Content extra>
            {
              drops.map(({ id: did }) => (
                <ImageLabel
                  key={did}
                  id={did}
                  text={(() => {
                    const drop = qdrops.find(({ id: qdid }) => did === qdid);
                    if (check.undefined(drop)) return 0;
                    return parseInt(
                      drop.stats.reduce((sum, { num, prob }) => sum + (num * prob), 0),
                      10,
                    );
                  })()}
                />
              ))
            }
          </Card.Content>
          <Card.Content extra>
            1000 times
          </Card.Content>
        </Card>
      ))
    }
  </Card.Group>,
  <h3 key="ap-title">
    AP Cost
  </h3>,
  <div key="ap">
    <Statistic size="small">
      <Statistic.Value>7000</Statistic.Value>
      <Statistic.Label>AP</Statistic.Label>
    </Statistic>
    <Statistic size="tiny">
      <Statistic.Value>=</Statistic.Value>
    </Statistic>
    <Statistic size="tiny">
      <Statistic.Value>2000</Statistic.Value>
      <Statistic.Label>AP (~ 02/26)</Statistic.Label>
    </Statistic>
    <Statistic size="tiny">
      <Statistic.Value>+</Statistic.Value>
    </Statistic>
    <Statistic size="tiny">
      <Statistic.Value>100</Statistic.Value>
      <Statistic.Label>Apple / Saint</Statistic.Label>
    </Statistic>
  </div>,
]);

Report.propTypes = {
  event: PropTypes.object,
};

Report.defaultProps = {
  event: {},
};

export default Report;
