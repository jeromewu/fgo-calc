import { connect } from 'react-redux';
import { setEventData } from '../modules/events';
import EventShop from '../components/common/EventShop';

export const mapStateToProps = ({
  router: { location: { pathname } },
  events,
}) => ({
  data: events[pathname],
});

export const mapDispatchToProps = dispatch => ({
  onQuantityUpdate: key => value => (
    dispatch(setEventData({ key, value }))
  ),
  onFilter: key => (evt, { checked }) => (
    dispatch(setEventData({ key, value: checked }))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EventShop);
