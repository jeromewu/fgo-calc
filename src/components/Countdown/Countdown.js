import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

export default class Countdown extends PureComponent {
  static defaultProps = {
    interval: 3000,
    start: Date.now(),
    end: Date.now(),
    bp: false,
  }

  static propTypes = {
    interval: PropTypes.number,
    start: PropTypes.number,
    end: PropTypes.number,
    bp: PropTypes.bool,
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
    const { now } = this.state;
    const { start, end, bp: hasBP } = this.props;
    const diff = end > now ? end - now : 0;
    const ap = Math.floor((diff) / 1000 / 60 / 5);
    const bp = Math.floor((diff) / 1000 / 60 / 60);
    const duration = moment.duration(diff);
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return [
      <div key="period">
        {`${moment(start).format('YYYY/MM/DD HH:mm')} ~ ${moment(end).format('YYYY/MM/DD HH:mm')}`}
      </div>,
      <div key="countdown">
        <span><FormattedMessage id="TOC.current.time.left" />:</span>
        <span>
          <span> {days} </span>
          <span><FormattedMessage id={days > 1 ? 'days' : 'day'} /></span>
          <span> {hours} </span>
          <span><FormattedMessage id={hours > 1 ? 'hours' : 'hour'} /></span>
          <span> {minutes} </span>
          <span> <FormattedMessage id={minutes > 1 ? 'minutes' : 'minute'} /></span>
          <span> {seconds} </span>
          <span><FormattedMessage id={seconds > 1 ? 'seconds' : 'second'} /></span>
          <span>{` = ${ap} AP${hasBP ? ` & ${bp} BP` : ''}`}</span>
        </span>
      </div>,
    ];
  }
}
