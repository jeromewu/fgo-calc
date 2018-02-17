import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import HomeView from '../components/HomeView';

export const mapStateToProps = () => ({
});

export const mapDispatchToProps = dispatch => ({
  onRoute: path => () => dispatch(push(path)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeView);
