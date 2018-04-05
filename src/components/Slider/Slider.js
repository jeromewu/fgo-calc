import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RCSlider from 'rc-slider';
import Handle from './Handle';

export default class Slider extends PureComponent {
  static propTypes = {
    value: PropTypes.number,
    onChange: PropTypes.func,
  }

  static defaultProps = {
    value: 0,
    onChange: () => {},
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps({ value }) {
    this.setState({ value });
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    const { onChange } = this.props;
    return (
      <RCSlider
        {...this.props}
        value={value}
        onChange={this.onChange}
        onAfterChange={onChange}
        handle={Handle}
      />
    );
  }
}
