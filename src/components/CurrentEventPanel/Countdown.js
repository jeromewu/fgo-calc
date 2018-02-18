import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

export default class Countdown extends PureComponent {
  static defaultProps = {
    interval: 3000,
    end: new Date(),
  }

  static propTypes = {
    interval: PropTypes.number,
    end: PropTypes.object,
  }


  state = {
    timerId: -1,
    now: new Date(),
  }

  componentWillMount() {
    this.setState({
      timerId: setInterval(() => {
        this.setState({ now: new Date() });
      }, this.props.interval),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  render() {
    const now = this.state.now.getTime();
    const end = this.props.end.getTime();
    const ap = parseInt((end - now) / 1000 / 60 / 5, 10);
    const duration = moment.duration(end - now);
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return (
      <span>
        <span> {days} </span>
        <span><FormattedMessage id={days > 1 ? 'days' : 'day'} /></span>
        <span> {hours} </span>
        <span><FormattedMessage id={hours > 1 ? 'hours' : 'hour'} /></span>
        <span> {minutes} </span>
        <span> <FormattedMessage id={minutes > 1 ? 'minutes' : 'minute'} /></span>
        <span> {seconds} </span>
        <span><FormattedMessage id={seconds > 1 ? 'seconds' : 'second'} /></span>
        <span>{` (${ap} AP) `}</span>
      </span>
    );
  }
}
