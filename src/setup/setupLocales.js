import { addLocaleData } from 'react-intl';
import { updateIntl } from 'react-intl-redux';
import check from 'check-types';
import zhLocaleData from 'react-intl/locale-data/zh';
import getParamByName from 'utils/getParamByName';
import locales from 'assets/locales';

export default (store) => {
  const lang = getParamByName('lang');

  addLocaleData(zhLocaleData);

  if (check.not.null(lang) && check.not.undefined(locales[lang])) {
    store.dispatch(updateIntl({ locale: lang, messages: locales[lang] }));
  }
};
