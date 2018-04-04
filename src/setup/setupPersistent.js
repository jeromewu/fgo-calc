import { saveState } from 'utils/persistState';

export default (store) => {
  store.subscribe(() => {
    const { intl: { locale }, events, config } = store.getState();
    saveState({
      intl: { locale },
      config,
      events,
    });
  });
};
