import React from 'react';
import PropTypes from 'prop-types';

const TCView = ({ style }) => (
  <div style={style} />
);

TCView.propTypes = {
  style: PropTypes.object,
};

TCView.defaultProps = {
  style: {},
};

export default TCView;
