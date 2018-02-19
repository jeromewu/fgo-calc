import genShopItem from 'utils/genShopItem';

export default {
  name: 'JourneyToTheWest',
  drops: [
    { id: 'Drop.big.lotus.flower' },
    { id: 'Drop.orb.of.deebs' },
  ],
  quests: [
  ],
  shop: [
    genShopItem(
      'CE.divine.princess.of.the.storm',
      'Drop.big.lotus.flower',
      4,
      300,
    ),
    genShopItem(
      'Asc.spirit.root',
      'Drop.big.lotus.flower',
      10,
      80,
    ),
    genShopItem(
      'Asc.warhorses.immature.horn',
      'Drop.big.lotus.flower',
      20,
      60,
    ),
    genShopItem(
      'Asc.phoenix.plume',
      'Drop.big.lotus.flower',
      20,
      50,
    ),
    genShopItem(
      'Asc.octuplet.twin.crystals',
      'Drop.big.lotus.flower',
      20,
      40,
    ),
    genShopItem(
      'Asc.crystallized.lore',
      'Drop.big.lotus.flower',
      1,
      1000,
    ),
    genShopItem(
      'Asc.mana.prism',
      'Drop.big.lotus.flower',
      2,
      500,
    ),
  ],
};
