import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';

const mapStateToProps = ({
  intl: { locale, messages },
}) => ({
  locale,
  messages,
  key: locale,
});

export default connect(mapStateToProps)(IntlProvider);
