import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const Handle = ({
  value, dragging, index, ...props
}) => (
  <Tooltip
    prefixCls="rc-slider-tooltip"
    overlay={value}
    visible={dragging}
    placement="top"
    align={{
      offset: [0, -5],
    }}
    key={index}
  >
    <Slider.Handle value={value} {...props} />
  </Tooltip>
);

Handle.propTypes = {
  value: PropTypes.number.isRequired,
  dragging: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

export default Handle;
