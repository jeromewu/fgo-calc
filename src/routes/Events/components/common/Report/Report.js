import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import check from 'check-types';
import { Card, Statistic, Image } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import images from 'assets/images';
import moment from 'moment';
import shortid from 'shortid';
import ImageLabel from '../ImageLabel';

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StatisticGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MAX_BP = 8;

export default class Report extends PureComponent {
  static propTypes = {
    interval: PropTypes.number,
    end: PropTypes.number,
    required: PropTypes.object,
    maxAP: PropTypes.number,
  }

  static defaultProps = {
    interval: 3000,
    end: Date.now(),
    required: {},
    maxAP: 135,
  }

  state = {
    timerId: -1,
    now: Date.now(),
  }

  componentWillMount() {
    this.setState({
      timerId: setInterval(() => {
        this.setState({ now: Date.now() });
      }, this.props.interval),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const {
      end,
      maxAP,
      required: {
        drops, quests, ap, bp,
      },
    } = this.props;
    const { now } = this.state;

    const apCountdown = Math.floor((end - now) / (1000 * 60 * 5));
    const nApple = Math.ceil((ap - apCountdown) / maxAP);

    const bpCountdown = Math.floor((end - now) / (1000 * 60 * 60));
    const nSQ = Math.ceil((bp - bpCountdown) / MAX_BP);

    return ([
      <h2 key="title">
        <FormattedMessage id="Event.progress.report" />
      </h2>,
      <h3 key="remain-title">
        <FormattedMessage id="Event.remaining" />
      </h3>,
      <StatisticGroup key="remain">
        {
          drops.map(({ id, total }) => (
            <Statistic
              key={shortid.generate()}
              size="tiny"
            >
              <Statistic.Value>
                {Math.max(total, 0)}
              </Statistic.Value>
              <Statistic.Label>
                <Center>
                  <Image src={images[id]} alt={id} />
                </Center>
              </Statistic.Label>
            </Statistic>
          ))
        }
      </StatisticGroup>,
      <h3 key="quests-title">
        <FormattedMessage id="Event.farm" />
      </h3>,
      <Card.Group key="quests" centered>
        {
          quests.map(({ id: qid, drops: qdrops, repeat }) => (
            <Card key={shortid.generate()}>
              <Card.Content>
                <Card.Header>
                  <FormattedMessage id={qid} />
                </Card.Header>
                <h3>
                  {`${Math.max(repeat, 0)} `}
                  <FormattedMessage id="Event.times" />
                </h3>
              </Card.Content>
              <Card.Content extra>
                {
                  qdrops.map(({ id: did, num }) => (
                    <ImageLabel
                      key={shortid.generate()}
                      id={did}
                      text={Math.max(num, 0)}
                    />
                  ))
                }
              </Card.Content>
            </Card>
          ))
        }
      </Card.Group>,
      <h3 key="ap-title">
        <FormattedMessage
          id="Event.ap.cost"
          values={{ maxAP }}
        />
      </h3>,
      <div key="ap">
        <Statistic size="tiny">
          <Statistic.Value>{Math.max(ap, 0)}</Statistic.Value>
          <Statistic.Label>AP</Statistic.Label>
        </Statistic>
        <Statistic size="tiny">
          <Statistic.Value>=</Statistic.Value>
        </Statistic>
        <Statistic size="mini">
          <Statistic.Value>{Math.max(apCountdown, 0)}</Statistic.Value>
          <Statistic.Label>{`AP (~ ${moment(end).format('MM/DD')})`}</Statistic.Label>
        </Statistic>
        <Statistic size="tiny">
          <Statistic.Value>+</Statistic.Value>
        </Statistic>
        <Statistic size="mini">
          <Statistic.Value>{Math.max(nApple, 0)}</Statistic.Value>
          <Statistic.Label>
            <FormattedMessage id="Item.golden.apple" />
          </Statistic.Label>
        </Statistic>
      </div>,
      check.undefined(bp)
        ? null
        : (
          <div key="bp">
            <Statistic size="tiny">
              <Statistic.Value>{Math.max(bp, 0)}</Statistic.Value>
              <Statistic.Label>BP</Statistic.Label>
            </Statistic>
            <Statistic size="tiny">
              <Statistic.Value>=</Statistic.Value>
            </Statistic>
            <Statistic size="mini">
              <Statistic.Value>{Math.max(bpCountdown, 0)}</Statistic.Value>
              <Statistic.Label>{`AP (~ ${moment(end).format('MM/DD')})`}</Statistic.Label>
            </Statistic>
            <Statistic size="tiny">
              <Statistic.Value>+</Statistic.Value>
            </Statistic>
            <Statistic size="mini">
              <Statistic.Value>{Math.max(nSQ, 0)}</Statistic.Value>
              <Statistic.Label>
                <FormattedMessage id="Item.saint.quartz" />
              </Statistic.Label>
            </Statistic>
          </div>
        ),
    ]);
  }
}
