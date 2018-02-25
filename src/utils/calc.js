import meval from './meval';

export const getTotal = ({ did, shop, data }) => (
  shop
    .filter(({ drop }) => drop === did)
    .reduce((sum, { id, limit, cost }) => (
      sum + ((limit - (data[id] || 0)) * cost)
    ), 0) - meval(data[`${did}/owned`], 0)
);

export const getTypeAddDrop = ({ did, quests, data }) => (
  quests
    .find(({ drops }) => drops[0].id === did).drops
    .find(({ id }) => id === did).stats
    .reduce((sum, { num, prob }) => (
      Math.floor(sum + ((num + meval(data[`${did}/bonus`], 0)) * prob))
    ), 0)
);

export const getRepeat = ({ total, drop }) => (
  Math.ceil(total / drop)
);

export const getAP = ({ qid, quests, repeat }) => (
  repeat * quests
    .find(({ id }) => id === qid).cost.num
);
