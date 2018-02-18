import goWest from 'assets/images/tc/events/go-west.png';
import onigashima from 'assets/images/tc/events/onigashima.png';

const genShopItem = (id, drop, limit, cost) => ({
  id, drop, limit, cost,
});

export default {
  GoWest: {
    name: 'GoWest',
    banner: goWest,
    start: new Date('2018-02-12T16:00:00+0800'),
    end: new Date('2018-02-26T12:59:00+0800'),
    items: [
      { id: 'Drop.big.lotus.flower' },
      { id: 'Drop.orb.of.deebs' },
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
  },
  Onigashima: {
    name: 'Onigashima',
    banner: onigashima,
    start: null,
    end: null,
  },
};
