import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Card, Image, Label } from 'semantic-ui-react';
import Header from 'components/Header';
import BannerImage from 'components/BannerImage';
import Slider from 'rc-slider';
import goWest from 'assets/images/tc/events/go-west.png';
import images from 'assets/images';
import 'rc-slider/assets/index.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LargeSpan = styled.span`
  font-size: 14px;
  font-weight: bold;
  padding-left: 8px;
`;

const GoWest = ({ event: { shop } }) => (
  <Container>
    <Header key="header" />
    <BannerImage key="banner" src={goWest} alt="GoWest" />
    <h2><FormattedMessage id="Event.shop" /></h2>
    <Card.Group centered doubling>
      {
        shop.map(({
          id, drop, cost, limit,
        }) => (
          <Card key={id}>
            <Card.Content>
              <Card.Header>
                <FormattedMessage id={id} />
              </Card.Header>
              <Card.Description>
                <Label>
                  <Image src={images[id]} />
                  <LargeSpan>{`${limit} / ${limit}`}</LargeSpan>
                </Label>
                <Label>
                  <Image src={images[drop]} />
                  <LargeSpan>{cost}</LargeSpan>
                </Label>
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
    </Card.Group>
  </Container>
);

GoWest.propTypes = {
  event: PropTypes.object,
};

GoWest.defaultProps = {
  event: {},
};

export default GoWest;
