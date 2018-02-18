import setupLocales from './setupLocales';
import setupPersistent from './setupPersistent';

export default (store) => {
  setupLocales();
  setupPersistent(store);
};
