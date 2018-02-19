import { connect } from 'react-redux';
import Overview from '../components/Overview';

export const mapStateToProps = (
  state,
  { match: { params: { server } } },
) => ({
  server,
});

export const mapDispatchToProps = () => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Overview);
