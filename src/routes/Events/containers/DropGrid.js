import { connect } from 'react-redux';
import { setEventData } from '../modules/events';
import DropGrid from '../components/common/DropGrid';

export const mapStateToProps = ({
  router: { location: { pathname } },
  events,
}) => ({
  data: events[pathname],
});

export const mapDispatchToProps = dispatch => ({
  onQuantityUpdate: (key, isInt = true) => (evt, { value }) => {
    const numValue = isInt ? parseInt(value, 10) : parseFloat(value);
    dispatch(setEventData({ key, value: numValue }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropGrid);
