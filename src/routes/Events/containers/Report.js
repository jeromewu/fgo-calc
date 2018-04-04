import { connect } from 'react-redux';
import Report from '../components/common/Report';

export const mapStateToProps = ({
  config: { maxAP },
}) => ({
  maxAP,
});

export const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Report);
