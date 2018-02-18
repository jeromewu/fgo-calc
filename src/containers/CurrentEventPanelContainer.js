import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CurrentEventPanel from 'components/CurrentEventPanel';

export const mapStateToProps = () => ({
});

export const mapDispatchToProps = dispatch => ({
  onImageClick: (server, name) => () => dispatch(push(`/${server}/${name}`)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CurrentEventPanel);
