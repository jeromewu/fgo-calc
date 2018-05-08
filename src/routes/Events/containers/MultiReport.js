import { connect } from 'react-redux';
import { setEventData } from '../modules/events';
import MultiReport from '../components/common/MultiReport';

export const mapStateToProps = ({
  config: { maxAP },
  router: { location: { pathname } },
  events,
}) => ({
  maxAP,
  data: events[pathname],
});

export const mapDispatchToProps = dispatch => ({
  onSolUpdate: index => () => {
    dispatch(setEventData({ key: 'solIndex', value: index }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MultiReport);
