import {
  genShopItem,
  getTotal,
  getTypeAddDrop,
  getRepeat,
  getAP,
} from 'utils/calc';

export default {
  name: 'DaVinciAndThe7CounterfeitHeroicSpirits',
  bp: false,
  drops: [
    {
      id: 'Drop.real.manuscript',
      type: 'ADD',
      min: 0,
      max: 24,
      step: 1,
    },
    {
      id: 'Drop.fake.manuscript',
      type: 'ADD',
      min: 0,
      max: 24,
      step: 1,
    },
    {
      id: 'Drop.mona.lisa.fake',
      type: 'ADD',
      min: 0,
      max: 12,
      step: 1,
    },
    {
      id: 'Drop.self.portrait',
      type: 'ADD',
      min: 0,
      max: 12,
      step: 1,
    },
    {
      id: 'Drop.vitruvian.man.fake',
      type: 'ADD',
      min: 0,
      max: 12,
      step: 1,
    },
  ],
  quests: [
    {
      id: 'Qst.gallery.louvre',
      drops: [
        {
          id: 'Drop.real.manuscript',
          stats: [
            { num: 3, prob: 4.9 },
            { num: 10, prob: 0.5 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.gallery.louvre',
      drops: [
        {
          id: 'Drop.fake.manuscript',
          stats: [
            { num: 3, prob: 4.9 },
            { num: 10, prob: 0.5 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.gallery.hermitage',
      drops: [
        {
          id: 'Drop.mona.lisa.fake',
          stats: [
            { num: 4, prob: 4.7 },
            { num: 6, prob: 2.865 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.gallery.vatican',
      drops: [
        {
          id: 'Drop.self.portrait',
          stats: [
            { num: 4, prob: 4.75 },
            { num: 5, prob: 2.805 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.gallery.uffizi',
      drops: [
        {
          id: 'Drop.vitruvian.man.fake',
          stats: [
            { num: 4, prob: 5.8 },
            { num: 5, prob: 2.805 },
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
      'Event.real.box',
      'Drop.real.manuscript',
      6,
      600,
    ),
    genShopItem(
      'Event.fake.box',
      'Drop.fake.manuscript',
      6,
      600,
    ),
    genShopItem(
      'Ce.school.of.chaldea',
      'Drop.mona.lisa.fake',
      2,
      200,
    ),
    genShopItem(
      'Asc.heart.of.a.foreign.god',
      'Drop.mona.lisa.fake',
      20,
      30,
    ),
    genShopItem(
      'Asc.spirit.root',
      'Drop.mona.lisa.fake',
      20,
      30,
    ),
    genShopItem(
      'Asc.bloodstone.tear',
      'Drop.mona.lisa.fake',
      20,
      20,
    ),
    genShopItem(
      'Asc.secret.gem.of.swords',
      'Drop.mona.lisa.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.secret.gem.of.bows',
      'Drop.mona.lisa.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.secret.gem.of.lances',
      'Drop.mona.lisa.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.secret.gem.of.cavalry',
      'Drop.mona.lisa.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.secret.gem.of.spells',
      'Drop.mona.lisa.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.secret.gem.of.killing',
      'Drop.mona.lisa.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.secret.gem.of.madness',
      'Drop.mona.lisa.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.mana.prism',
      'Drop.mona.lisa.fake',
      500,
      1,
    ),
    genShopItem(
      'Ce.school.of.chaldea',
      'Drop.self.portrait',
      1,
      200,
    ),
    genShopItem(
      'Asc.black.tallow',
      'Drop.self.portrait',
      20,
      40,
    ),
    genShopItem(
      'Asc.talon.of.chaos',
      'Drop.self.portrait',
      20,
      30,
    ),
    genShopItem(
      'Asc.phoenix.plume',
      'Drop.self.portrait',
      20,
      20,
    ),
    genShopItem(
      'Asc.magic.gem.of.swords',
      'Drop.self.portrait',
      20,
      10,
    ),
    genShopItem(
      'Asc.magic.gem.of.bows',
      'Drop.self.portrait',
      20,
      10,
    ),
    genShopItem(
      'Asc.magic.gem.of.lances',
      'Drop.self.portrait',
      20,
      10,
    ),
    genShopItem(
      'Asc.magic.gem.of.cavalry',
      'Drop.self.portrait',
      20,
      10,
    ),
    genShopItem(
      'Asc.magic.gem.of.spells',
      'Drop.self.portrait',
      20,
      10,
    ),
    genShopItem(
      'Asc.magic.gem.of.killing',
      'Drop.self.portrait',
      20,
      10,
    ),
    genShopItem(
      'Asc.magic.gem.of.madness',
      'Drop.self.portrait',
      20,
      10,
    ),
    genShopItem(
      'Ce.school.of.chaldea',
      'Drop.vitruvian.man.fake',
      1,
      200,
    ),
    genShopItem(
      'Asc.warhorses.immature.horn',
      'Drop.vitruvian.man.fake',
      20,
      40,
    ),
    genShopItem(
      'Asc.ghost.lantern',
      'Drop.vitruvian.man.fake',
      20,
      20,
    ),
    genShopItem(
      'Asc.homunculus.baby',
      'Drop.vitruvian.man.fake',
      20,
      20,
    ),
    genShopItem(
      'Asc.shinning.gem.of.swords',
      'Drop.vitruvian.man.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.shinning.gem.of.bows',
      'Drop.vitruvian.man.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.shinning.gem.of.lances',
      'Drop.vitruvian.man.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.shinning.gem.of.cavalry',
      'Drop.vitruvian.man.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.shinning.gem.of.spells',
      'Drop.vitruvian.man.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.shinning.gem.of.killing',
      'Drop.vitruvian.man.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.shinning.gem.of.madness',
      'Drop.vitruvian.man.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.fou.kun.of.the.star',
      'Drop.vitruvian.man.fake',
      20,
      10,
    ),
    genShopItem(
      'Asc.fou.kun.of.the.sun',
      'Drop.vitruvian.man.fake',
      20,
      10,
    ),
  ],
  getRequired: ({ shop, quests }, data) => {
    const ids = [
      'Drop.real.manuscript',
      'Drop.fake.manuscript',
      'Drop.mona.lisa.fake',
      'Drop.self.portrait',
      'Drop.vitruvian.man.fake',
    ];

    const drops = ids.map(id => ({
      id,
      total: getTotal({ did: id, shop, data }),
    }));

    const rQuests = quests.map(({ id, drops: ds }) => {
      const did = ds[0].id;
      const { total } = drops.find(({ id: i }) => i === did);
      const drop = getTypeAddDrop({ did, quests, data });
      return {
        id,
        drops: [
          { id: did, num: drop },
        ],
        repeat: getRepeat({ total, drop }),
      };
    });

    const ap = rQuests.reduce((sum, { id, repeat }) => (
      sum + getAP({ qid: id, quests, repeat })
    ), 0);

    return {
      drops,
      quests: rQuests,
      ap,
    };
  },
};
