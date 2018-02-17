import { connect } from 'react-redux';
import { updateIntl } from 'react-intl-redux';
import locales from 'assets/locales';
import LangDropdown from 'components/LangDropdown';

export const mapStateToProps = () => ({
});

export const mapDispatchToProps = dispatch => ({
  onItemClick: key => () => dispatch(updateIntl({ locale: key.split('-')[0], messages: locales[key] })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LangDropdown);
