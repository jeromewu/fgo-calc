import {
  genShopItem,
  getTotal,
  getTypeAddDrop,
  getRepeat,
  getAP,
} from 'utils/calc';

const DROPS = [
  'Drop.iron.materials',
  'Drop.stone.materials',
  'Drop.wood.materials',
  'Drop.food.ingredients',
  'Drop.fresh.water',
  'Drop.uisce.alloy',
  'Drop.eadrom.alloy',
  'Drop.realta.alloy',
  'Drop.oil',
  'Drop.cement',
];

export default {
  name: 'FGO2016Summer',
  bp: false,
  drops: [
    {
      id: DROPS[0],
      type: 'ADD',
      min: 0,
      max: 18,
      step: 1,
    },
    {
      id: DROPS[1],
      type: 'ADD',
      min: 0,
      max: 18,
      step: 1,
    },
    {
      id: DROPS[2],
      type: 'ADD',
      min: 0,
      max: 18,
      step: 1,
    },
    {
      id: DROPS[3],
      type: 'ADD',
      min: 0,
      max: 18,
      step: 1,
    },
    {
      id: DROPS[4],
      type: 'ADD',
      min: 0,
      max: 18,
      step: 1,
    },
    {
      id: DROPS[5],
      type: 'ADD',
      min: 0,
      max: 18,
      step: 1,
    },
    {
      id: DROPS[6],
      type: 'ADD',
      min: 0,
      max: 18,
      step: 1,
    },
    {
      id: DROPS[7],
      type: 'ADD',
      min: 0,
      max: 18,
      step: 1,
    },
    {
      id: DROPS[8],
      type: 'ADD',
      min: 0,
      max: 18,
      step: 1,
    },
    {
      id: DROPS[9],
      type: 'ADD',
      min: 0,
      max: 18,
      step: 1,
    },
  ],
  quests: [
    {
      id: 'Qst.romantic.cave.storm',
      drops: [
        {
          id: DROPS[0],
          stats: [
            { num: 4, prob: 11 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.picnic.field.storm',
      drops: [
        {
          id: DROPS[1],
          stats: [
            { num: 4, prob: 11 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.jungle.adventure.storm',
      drops: [
        {
          id: DROPS[2],
          stats: [
            { num: 4, prob: 10 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.mystery.zone.storm',
      drops: [
        {
          id: DROPS[3],
          stats: [
            { num: 4, prob: 11.3 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.private.beach.storm',
      drops: [
        {
          id: DROPS[4],
          stats: [
            { num: 3, prob: 9.6 },
            { num: 4, prob: 2 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.old.cave.destruction',
      drops: [
        {
          id: DROPS[5],
          stats: [
            { num: 4, prob: 10.8 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.underworld.destruction',
      drops: [
        {
          id: DROPS[6],
          stats: [
            { num: 4, prob: 11 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.silent.field.destruction',
      drops: [
        {
          id: DROPS[7],
          stats: [
            { num: 4, prob: 11 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.reborn.city.destruction',
      drops: [
        {
          id: DROPS[8],
          stats: [
            { num: 4, prob: 11 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.dead.coast.destruction',
      drops: [
        {
          id: DROPS[9],
          stats: [
            { num: 4, prob: 11 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
  ],
  shop: [
    genShopItem(
      'Ce.summer.time.mistress',
      DROPS[0],
      1,
      300,
    ),
    genShopItem(
      'Item.ring.bell.branch',
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
      'Asc.meteoric.horseshoe',
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
      'Asc.lancer.piece',
      DROPS[0],
      20,
      30,
    ),
    genShopItem(
      'Ce.summer.time.mistress',
      DROPS[1],
      1,
      300,
    ),
    genShopItem(
      'Item.ring.bell.branch',
      DROPS[1],
      1,
      300,
    ),
    genShopItem(
      'Asc.dragons.reverse.scale',
      DROPS[1],
      10,
      80,
    ),
    genShopItem(
      'Asc.metal.of.great.knight',
      DROPS[1],
      20,
      40,
    ),
    genShopItem(
      'Asc.archer.monument',
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
      'Ce.summer.time.mistress',
      DROPS[2],
      1,
      300,
    ),
    genShopItem(
      'Item.ring.bell.branch',
      DROPS[2],
      1,
      300,
    ),
    genShopItem(
      'Asc.warhorses.immature.horn',
      DROPS[2],
      20,
      60,
    ),
    genShopItem(
      'Asc.seashell.of.reminiscence',
      DROPS[2],
      20,
      40,
    ),
    genShopItem(
      'Asc.saber.monument',
      DROPS[2],
      20,
      40,
    ),
    genShopItem(
      'Asc.saber.piece',
      DROPS[2],
      20,
      30,
    ),
    genShopItem(
      'Ce.summer.time.mistress',
      DROPS[3],
      1,
      300,
    ),
    genShopItem(
      'Asc.phoenix.plume',
      DROPS[3],
      20,
      50,
    ),
    genShopItem(
      'Asc.yggdrasil.seed',
      DROPS[3],
      30,
      30,
    ),
    genShopItem(
      'Asc.fou.kun.of.the.star',
      DROPS[3],
      20,
      30,
    ),
    genShopItem(
      'Asc.fou.kun.of.the.sun',
      DROPS[3],
      20,
      30,
    ),
    genShopItem(
      'Item.ring.bell.branch',
      DROPS[4],
      1,
      300,
    ),
    genShopItem(
      'Asc.octuplet.twin.crystals',
      DROPS[4],
      20,
      40,
    ),
    genShopItem(
      'Asc.heros.proof',
      DROPS[4],
      30,
      30,
    ),
    genShopItem(
      'Ce.four.star.exp.card',
      DROPS[4],
      100,
      8,
    ),
    genShopItem(
      'Ce.three.star.exp.card',
      DROPS[4],
      100,
      4,
    ),
    genShopItem(
      'Ce.chaldea.lifesavers',
      DROPS[5],
      1,
      300,
    ),
    genShopItem(
      'Asc.lamp.of.demon.sealing',
      DROPS[5],
      20,
      60,
    ),
    genShopItem(
      'Asc.forbidden.page',
      DROPS[5],
      20,
      40,
    ),
    genShopItem(
      'Asc.assassin.monument',
      DROPS[5],
      20,
      40,
    ),
    genShopItem(
      'Asc.assassin.piece',
      DROPS[5],
      20,
      30,
    ),
    genShopItem(
      'Ce.chaldea.lifesavers',
      DROPS[6],
      1,
      300,
    ),
    genShopItem(
      'Asc.heart.of.a.foreign.god',
      DROPS[6],
      10,
      80,
    ),
    genShopItem(
      'Asc.seashell.of.reminiscence',
      DROPS[6],
      20,
      40,
    ),
    genShopItem(
      'Asc.caster.monument',
      DROPS[6],
      20,
      40,
    ),
    genShopItem(
      'Asc.caster.piece',
      DROPS[6],
      20,
      30,
    ),
    genShopItem(
      'Ce.chaldea.lifesavers',
      DROPS[7],
      1,
      300,
    ),
    genShopItem(
      'Asc.spirit.root',
      DROPS[7],
      10,
      80,
    ),
    genShopItem(
      'Asc.chains.of.the.fool',
      DROPS[7],
      30,
      40,
    ),
    genShopItem(
      'Asc.rider.monument',
      DROPS[7],
      20,
      40,
    ),
    genShopItem(
      'Asc.rider.piece',
      DROPS[7],
      20,
      30,
    ),
    genShopItem(
      'Ce.chaldea.lifesavers',
      DROPS[8],
      1,
      300,
    ),
    genShopItem(
      'Asc.black.tallow',
      DROPS[8],
      20,
      60,
    ),
    genShopItem(
      'Asc.ghost.lantern',
      DROPS[8],
      20,
      40,
    ),
    genShopItem(
      'Asc.berserker.monument',
      DROPS[8],
      20,
      40,
    ),
    genShopItem(
      'Asc.berserker.piece',
      DROPS[8],
      20,
      30,
    ),
    genShopItem(
      'Ce.four.star.exp.card',
      DROPS[8],
      100,
      8,
    ),
    genShopItem(
      'Ce.three.star.exp.card',
      DROPS[8],
      100,
      4,
    ),
    genShopItem(
      'Ce.chaldea.lifesavers',
      DROPS[9],
      1,
      300,
    ),
    genShopItem(
      'Asc.talon.of.chaos',
      DROPS[9],
      20,
      60,
    ),
    genShopItem(
      'Asc.unlucky.bone',
      DROPS[9],
      30,
      30,
    ),
    genShopItem(
      'Asc.fou.kun.of.the.star',
      DROPS[9],
      20,
      30,
    ),
    genShopItem(
      'Asc.fou.kun.of.the.sun',
      DROPS[9],
      20,
      30,
    ),
  ],
  getRequired: ({ shop, quests }, data) => {
    const drops = DROPS.map(id => ({
      id,
      total: getTotal({ did: id, shop, data }),
    }));

    const rQuests = quests.map(({ id, drops: ds, cost }) => {
      const did = ds[0].id;
      const { total } = drops.find(({ id: i }) => i === did);
      const drop = getTypeAddDrop({ did, quests, data });
      return {
        id,
        drops: [
          { id: did, num: drop },
        ],
        repeat: getRepeat({ total, drop }),
        cost,
      };
    });

    const ap = rQuests
      .filter(({ cost }) => cost.id === 'AP')
      .reduce((sum, { id, repeat }) => (
        sum + getAP({ qid: id, quests, repeat })
      ), 0);

    return {
      drops,
      quests: rQuests,
      ap,
    };
  },
};
