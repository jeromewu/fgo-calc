import { connect } from 'react-redux';
import calendar from 'constants/calendar';
import * as events from 'constants/events';
import FGO2016Summer from '../components/FGO2016Summer';

export const mapStateToProps = (
  {
    events: data,
    router: { location: { pathname } },
  },
  { match: { params: { server, eventName } } },
) => ({
  server,
  event: {
    ...calendar[server].find(({ name }) => name === eventName),
    ...events[eventName],
  },
  data: data[pathname],
});

export const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FGO2016Summer);
