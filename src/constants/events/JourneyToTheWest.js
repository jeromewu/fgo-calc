import React from 'react';
import meval from 'utils/meval';
import { genShopItem } from 'utils/calc';
import { FormattedMessage } from 'react-intl';

export default {
  name: 'JourneyToTheWest',
  bp: false,
  drops: [
    {
      id: 'Drop.big.lotus.flower',
      type: 'ADD',
      min: 0,
      max: 18,
      step: 1,
    },
    {
      id: 'Drop.orb.of.deebs',
      type: 'MUL',
      min: 1,
      max: 2,
      step: 0.2,
    },
  ],
  quests: [
    {
      id: 'Qst.nakara.realm',
      drops: [
        {
          id: 'Drop.big.lotus.flower',
          stats: [
            { num: 2, prob: 8.478 },
            { num: 3, prob: 11.12 },
            { num: 4, prob: 4 },
          ],
        },
      ],
      cost: {
        id: 'Drop.orb.of.deebs',
        num: 140,
      },
    },
    {
      id: 'Qst.tathagata',
      drops: [
        {
          id: 'Drop.orb.of.deebs',
          stats: [
            { num: 2, prob: 5 },
            { num: 4, prob: 4 },
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
      'Ce.divine.princess.of.the.storm',
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
      500,
      2,
    ),
  ],
  message: {
    header: <FormattedMessage id="Event.notice" />,
    content: (
      <p>
        <FormattedMessage id="Event.journey.to.the.west.bonus.message" />
      </p>
    ),
  },
  getRequired: ({ shop, quests }, data) => {
    const lotus = 'Drop.big.lotus.flower';
    const orb = 'Drop.orb.of.deebs';
    const nakara = 'Qst.nakara.realm';
    const tathagata = 'Qst.tathagata';

    const totalLotus = shop
      .filter(({ drop }) => drop === lotus)
      .reduce((sum, {
        id, drop, limit, cost,
      }) => (
        sum + ((limit - (data[`${drop}/${id}`] || 0)) * cost)
      ), 0) - meval(data[`${lotus}/owned`], 0);
    const bonusLotus = meval(data[`${lotus}/bonus`], 0);
    const qstNakara = quests.find(({ id }) => id === nakara);
    const dropLotus =
      qstNakara.drops
        .find(({ id }) => id === lotus).stats
        .reduce((sum, { num, prob }) => (
          Math.floor(sum + ((num + bonusLotus) * prob))
        ), 0);
    const repeatNakara = Math.ceil(totalLotus / dropLotus);

    const totalOrb = (repeatNakara * qstNakara.cost.num) - (meval(data[`${orb}/owned`], 0));
    const bonusOrb = meval(data[`${orb}/bonus`], 1);
    const qstTathagata = quests.find(({ id }) => id === tathagata);
    const dropOrb =
      Math.floor(qstTathagata.drops
        .find(({ id }) => id === orb).stats
        .reduce((sum, { num, prob }) => (
          Math.floor(sum + (num * prob))
        ), 0) * bonusOrb);
    const repeatTathagata = Math.ceil(totalOrb / dropOrb);

    const ap = repeatTathagata * qstTathagata.cost.num;


    return {
      drops: [
        {
          id: lotus,
          total: totalLotus,
        },
        {
          id: orb,
          total: totalOrb,
        },
      ],
      quests: [
        {
          id: nakara,
          drops: [
            { id: lotus, num: dropLotus },
          ],
          repeat: repeatNakara,
        },
        {
          id: tathagata,
          drops: [
            { id: orb, num: dropOrb },
          ],
          repeat: repeatTathagata,
        },
      ],
      ap,
    };
  },
};
