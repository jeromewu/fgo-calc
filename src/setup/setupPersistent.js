import { saveState } from 'utils/persistState';

export default (store) => {
  store.subscribe(() => {
    const { intl: { locale } } = store.getState();
    saveState({
      intl: { locale },
    });
  });
};
