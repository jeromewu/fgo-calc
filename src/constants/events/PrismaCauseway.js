import {
  genShopItem,
  getTotal,
  getTypeAddDrop,
  getRepeat,
  getAP,
} from 'utils/calc';
import meval from 'utils/meval';

const DROPS = [
  'Drop.no.lion.kun',
  'Drop.magical.bushido.musashi',
  'Drop.high.class.pudding',
];

export default {
  name: 'PrismaCauseway',
  bp: false,
  drops: [
    {
      id: DROPS[0],
      type: 'ADD',
      min: 0,
      max: 12,
      step: 1,
    },
    {
      id: DROPS[1],
      type: 'ADD',
      min: 0,
      max: 12,
      step: 1,
    },
    {
      id: DROPS[2],
      type: 'ADD',
      min: 0,
      max: 12,
      step: 1,
    },
  ],
  quests: [
    {
      id: 'Qst.kingdom.of.dead.bookcases.rank.ex',
      drops: [
        {
          id: DROPS[0],
          stats: [
            { num: 2, prob: 6 },
            { num: 3, prob: 9 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 30,
      },
    },
    {
      id: 'Qst.kingdom.of.snow.flowers.and.honey.rank.ex',
      drops: [
        {
          id: DROPS[1],
          stats: [
            { num: 2, prob: 6 },
            { num: 3, prob: 10 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 30,
      },
    },
    {
      id: 'Qst.kingdom.of.candies.rank.ex',
      drops: [
        {
          id: DROPS[2],
          stats: [
            { num: 2, prob: 7.2 },
            { num: 3, prob: 9 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 30,
      },
    },
    {
      id: 'Qst.kingdom.of.starfield.and.crystals.rank.ex',
      drops: [
        {
          id: DROPS[0],
          stats: [
            { num: 2, prob: 2.1 },
            { num: 4, prob: 5 },
          ],
        },
        {
          id: DROPS[1],
          stats: [
            { num: 2, prob: 7.8 },
          ],
        },
        {
          id: DROPS[2],
          stats: [
            { num: 2, prob: 2.1 },
            { num: 4, prob: 5 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 30,
      },
    },
  ],
  shop: [
    genShopItem(
      'Ce.kaleid.ruby',
      DROPS[0],
      1,
      300,
    ),
    genShopItem(
      'Asc.scarab.of.wisdom',
      DROPS[0],
      10,
      80,
    ),
    genShopItem(
      'Asc.phoenix.plume',
      DROPS[0],
      20,
      60,
    ),
    genShopItem(
      'Asc.homunculus.baby',
      DROPS[0],
      20,
      40,
    ),
    genShopItem(
      'Asc.archer.monument',
      DROPS[0],
      20,
      40,
    ),
    genShopItem(
      'Asc.lancer.monument',
      DROPS[0],
      20,
      40,
    ),
    genShopItem(
      'Asc.caster.monument',
      DROPS[0],
      20,
      40,
    ),
    genShopItem(
      'Ce.kaleid.sapphire',
      DROPS[1],
      1,
      300,
    ),
    genShopItem(
      'Asc.bloodstone.tear',
      DROPS[1],
      20,
      60,
    ),
    genShopItem(
      'Asc.forbidden.page',
      DROPS[1],
      20,
      40,
    ),
    genShopItem(
      'Asc.infinity.gear',
      DROPS[1],
      20,
      40,
    ),
    genShopItem(
      'Asc.archer.piece',
      DROPS[1],
      20,
      30,
    ),
    genShopItem(
      'Asc.lancer.piece',
      DROPS[1],
      20,
      30,
    ),
    genShopItem(
      'Asc.caster.piece',
      DROPS[1],
      20,
      30,
    ),
    genShopItem(
      'Asc.talon.of.chaos',
      DROPS[2],
      20,
      60,
    ),
    genShopItem(
      'Asc.chains.of.the.fool',
      DROPS[2],
      30,
      30,
    ),
    genShopItem(
      'Asc.yggdrasil.seed',
      DROPS[2],
      30,
      30,
    ),
    genShopItem(
      'Ce.four.star.exp.card',
      DROPS[2],
      100,
      8,
    ),
    genShopItem(
      'Ce.three.star.exp.card',
      DROPS[2],
      100,
      4,
    ),
    genShopItem(
      'Asc.fou.kun.of.the.star',
      DROPS[2],
      20,
      40,
    ),
    genShopItem(
      'Asc.fou.kun.of.the.sun',
      DROPS[2],
      20,
      40,
    ),
  ],
  getRequired: ({ shop, quests }, data) => {
    const drops = DROPS.map(id => ({
      id,
      total: getTotal({ did: id, shop, data }),
    }));

    const rQuests = quests.slice(0, 3).map(({ id, drops: ds, cost }) => {
      const did = ds[0].id;
      const { total } = drops.find(({ id: i }) => i === did);
      const drop = getTypeAddDrop({ did, quests: quests.slice(0, 3), data });
      return {
        id,
        drops: [
          { id: did, num: drop },
        ],
        repeat: getRepeat({ total, drop }),
        cost,
      };
    });

    let mixAp = 0;

    const mixQuests = [(() => {
      const { id, drops: ds, cost } = quests[3];
      const mixDrops = ds.map(({ id: did, stats }) => ({
        id: did,
        num: stats.reduce((sum, { num, prob }) => (
          Math.floor(sum + ((num + meval(data[`${did}/bonus`], 0)) * prob))
        ), 0),
      }));

      const repeat = mixDrops.reduce((max, { num }, index) => {
        const rp = Math.ceil(drops[index].total / num);
        return max > rp ? max : rp;
      }, 0);

      mixAp = repeat * cost.num;

      return {
        id,
        drops: mixDrops,
        repeat,
        cost,
      };
    })()];

    const ap = rQuests
      .filter(({ cost }) => cost.id === 'AP')
      .reduce((sum, { id, repeat }) => (
        sum + getAP({ qid: id, quests, repeat })
      ), 0);

    return {
      drops,
      sols: [
        {
          quests: mixQuests,
          ap: mixAp,
        },
        {
          quests: rQuests,
          ap,
        },
      ],
    };
  },
};
