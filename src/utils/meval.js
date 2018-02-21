import math from 'mathjs';
import check from 'check-types';

export default (exp, def) => {
  try {
    const ret = math.eval(exp);
    return check.not.undefined(ret) ? ret : def;
  } catch (e) {
    return def;
  }
};
