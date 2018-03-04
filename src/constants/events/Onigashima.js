import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  genShopItem,
  getTotal,
  getTypeAddDrop,
  getRepeat,
  getAP,
  getBP,
} from 'utils/calc';

export default {
  name: 'Onigashima',
  bp: true,
  drops: [
    {
      id: 'Drop.demonic.crest.hamper',
      type: 'ADD',
      min: 0,
      max: 12,
      step: 1,
    },
    {
      id: 'Drop.textile.of.brocade',
      type: 'ADD',
      min: 0,
      max: 12,
      step: 1,
    },
    {
      id: 'Drop.coral.of.dragon.king.palace',
      type: 'ADD',
      min: 0,
      max: 12,
      step: 1,
    },
  ],
  quests: [
    {
      id: 'Qst.hot.springs.rashaka',
      drops: [
        {
          id: 'Drop.demonic.crest.hamper',
          stats: [
            { num: 2, prob: 4.5 },
            { num: 3, prob: 4 },
            { num: 4, prob: 4 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.slope.to.the.afterlife.rashaka',
      drops: [
        {
          id: 'Drop.textile.of.brocade',
          stats: [
            { num: 2, prob: 7.5 },
            { num: 4, prob: 3 },
          ],
        },
      ],
      cost: {
        id: 'AP',
        num: 40,
      },
    },
    {
      id: 'Qst.tower.of.monkey.rashaka',
      drops: [
        {
          id: 'Drop.coral.of.dragon.king.palace',
          stats: [
            { num: 2, prob: 7.5 },
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
      id: 'Qst.subjugation.battle.demon',
      drops: [
        {
          id: 'Drop.damage.point',
          stats: [
            { num: 6, prob: 1 },
          ],
        },
      ],
      cost: {
        id: 'BP',
        num: 3,
      },
    },
  ],
  shop: [
    genShopItem(
      'Drop.damage.point',
      'Drop.damage.point',
      200,
      1,
    ),
    genShopItem(
      'Servant.sakata.kintoki.rider',
      'Drop.demonic.crest.hamper',
      2,
      600,
    ),
    genShopItem(
      'Ce.golden.sumo.wrestling',
      'Drop.demonic.crest.hamper',
      2,
      300,
    ),
    genShopItem(
      'Asc.dragons.reverse.scale',
      'Drop.demonic.crest.hamper',
      10,
      80,
    ),
    genShopItem(
      'Asc.talon.of.chaos',
      'Drop.demonic.crest.hamper',
      20,
      60,
    ),
    genShopItem(
      'Asc.homunculus.baby',
      'Drop.demonic.crest.hamper',
      20,
      40,
    ),
    genShopItem(
      'Asc.lancer.monument',
      'Drop.demonic.crest.hamper',
      20,
      40,
    ),
    genShopItem(
      'Asc.rider.monument',
      'Drop.demonic.crest.hamper',
      20,
      40,
    ),
    genShopItem(
      'Asc.assassin.monument',
      'Drop.demonic.crest.hamper',
      20,
      40,
    ),
    genShopItem(
      'Asc.berserker.monument',
      'Drop.demonic.crest.hamper',
      20,
      40,
    ),
    genShopItem(
      'Item.strong.pheasant.beans',
      'Drop.demonic.crest.hamper',
      20,
      20,
    ),
    genShopItem(
      'Asc.mana.prism',
      'Drop.demonic.crest.hamper',
      500,
      2,
    ),
    genShopItem(
      'Servant.sakata.kintoki.rider',
      'Drop.textile.of.brocade',
      1,
      600,
    ),
    genShopItem(
      'Ce.golden.sumo.wrestling',
      'Drop.textile.of.brocade',
      1,
      300,
    ),
    genShopItem(
      'Asc.bloodstone.tear',
      'Drop.textile.of.brocade',
      20,
      60,
    ),
    genShopItem(
      'Asc.snake.jewel',
      'Drop.textile.of.brocade',
      20,
      40,
    ),
    genShopItem(
      'Asc.ghost.lantern',
      'Drop.textile.of.brocade',
      20,
      40,
    ),
    genShopItem(
      'Asc.lancer.piece',
      'Drop.textile.of.brocade',
      20,
      40,
    ),
    genShopItem(
      'Asc.rider.piece',
      'Drop.textile.of.brocade',
      20,
      40,
    ),
    genShopItem(
      'Asc.assassin.piece',
      'Drop.textile.of.brocade',
      20,
      40,
    ),
    genShopItem(
      'Asc.berserker.piece',
      'Drop.textile.of.brocade',
      20,
      40,
    ),
    genShopItem(
      'Item.wise.monkey.beans',
      'Drop.textile.of.brocade',
      20,
      20,
    ),
    genShopItem(
      'Servant.sakata.kintoki.rider',
      'Drop.coral.of.dragon.king.palace',
      1,
      600,
    ),
    genShopItem(
      'Ce.golden.sumo.wrestling',
      'Drop.coral.of.dragon.king.palace',
      1,
      300,
    ),
    genShopItem(
      'Asc.unlucky.bone',
      'Drop.coral.of.dragon.king.palace',
      30,
      30,
    ),
    genShopItem(
      'Asc.voids.refuse',
      'Drop.coral.of.dragon.king.palace',
      30,
      30,
    ),
    genShopItem(
      'Asc.dragon.fang',
      'Drop.coral.of.dragon.king.palace',
      30,
      30,
    ),
    genShopItem(
      'Asc.fou.kun.of.the.star',
      'Drop.coral.of.dragon.king.palace',
      20,
      40,
    ),
    genShopItem(
      'Asc.fou.kun.of.the.sun',
      'Drop.coral.of.dragon.king.palace',
      20,
      40,
    ),
    genShopItem(
      'Ce.four.star.exp.card',
      'Drop.coral.of.dragon.king.palace',
      100,
      6,
    ),
    genShopItem(
      'Ce.three.star.exp.card',
      'Drop.coral.of.dragon.king.palace',
      100,
      3,
    ),
    genShopItem(
      'Item.swift.dog.beans',
      'Drop.coral.of.dragon.king.palace',
      20,
      20,
    ),
  ],
  message: {
    header: <FormattedMessage id="Event.notice" />,
    content: (
      <p>
        <FormattedMessage id="Event.onigashima.warning.message" />
      </p>
    ),
  },
  getRequired: ({ shop, quests }, data) => {
    const ids = [
      'Drop.demonic.crest.hamper',
      'Drop.textile.of.brocade',
      'Drop.coral.of.dragon.king.palace',
      'Drop.damage.point',
    ];

    const drops = ids.map(id => ({
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

    const bp = rQuests
      .filter(({ cost }) => cost.id === 'BP')
      .reduce((sum, { id, repeat }) => (
        sum + getBP({ qid: id, quests, repeat })
      ), 0);

    return {
      drops,
      quests: rQuests,
      ap,
      bp,
    };
  },
};
