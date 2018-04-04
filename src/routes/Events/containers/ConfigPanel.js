import { connect } from 'react-redux';
import { setConfig } from 'modules/config';
import meval from 'utils/meval';
import ConfigPanel from '../components/common/ConfigPanel';

export const mapStateToProps = ({
  config: { maxAP },
}) => ({
  maxAP,
});

export const mapDispatchToProps = dispatch => ({
  onMaxAPUpdate: (evt, { value }) => {
    dispatch(setConfig({ maxAP: meval(value, 0) }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfigPanel);
