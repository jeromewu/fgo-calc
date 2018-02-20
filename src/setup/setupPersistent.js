import { saveState } from 'utils/persistState';

export default (store) => {
  store.subscribe(() => {
    const { intl: { locale }, events } = store.getState();
    saveState({
      intl: { locale },
      events,
    });
  });
};
