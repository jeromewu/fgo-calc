import { connect } from 'react-redux';
import { setEventData } from '../modules/events';
import QuestGrid from '../components/common/QuestGrid';

export const mapStateToProps = ({
  router: { location: { pathname } },
  events,
}) => ({
  data: events[pathname],
});

export const mapDispatchToProps = dispatch => ({
  onItemUpdate: (evt, { name, value }) => {
    dispatch(setEventData({ key: `${name}/value`, value }));
  },
  onComplete: key => (evt, { checked }) => {
    dispatch(setEventData({ key, value: checked }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestGrid);
