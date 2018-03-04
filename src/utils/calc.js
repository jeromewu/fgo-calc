import meval from './meval';
import filterItems from './filterItems';

export const genShopItem = (id, drop, limit, cost) => ({
  id, drop, limit, cost,
});

export const getTotal = ({ did, shop, data }) => (
  shop
    .filter(filterItems(data))
    .filter(({ drop }) => drop === did)
    .reduce((sum, {
      id, drop, limit, cost,
    }) => (
      sum + ((limit - (data[`${drop}/${id}`] || 0)) * cost)
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

export const getBP = ({ qid, quests, repeat }) => (
  repeat * quests
    .find(({ id }) => id === qid).cost.num
);
