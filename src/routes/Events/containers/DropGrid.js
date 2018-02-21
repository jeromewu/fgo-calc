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
  onQuantityUpdate: key => (evt, { value }) => {
    dispatch(setEventData({ key, value }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropGrid);
