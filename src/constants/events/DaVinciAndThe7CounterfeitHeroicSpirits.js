import genShopItem from 'utils/genShopItem';

export default {
  name: 'DaVinciAndThe7CounterfeitHeroicSpirits',
  drops: [],
  quests: [],
  shop: [
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
  ],
  getRequired: () => ({
    drops: [],
    quests: [],
    ap: 0,
  }),
};
