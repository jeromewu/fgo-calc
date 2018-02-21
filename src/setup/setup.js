import setupLocales from './setupLocales';
import setupPersistent from './setupPersistent';

export default (store) => {
  setupLocales(store);
  setupPersistent(store);
};
