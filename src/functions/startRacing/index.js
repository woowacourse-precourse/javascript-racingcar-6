import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../constants/message';
import getRacingCars from './getRacingCars/index';
import getRepeatNum from './getRepeatNum/index';
import playOneRound from './playOneRound/index';
import printCarLocation from './printCarLocation';
import getWinners from './getWinners';
import printWinners from './printWinners';

const startRacing = async () => {
  const racingCarList = await getRacingCars();
  const repeatNum = await getRepeatNum();

  let racingResult = racingCarList.reduce((acc, car) => {
    acc[car] = 0;
    return acc;
  }, {});

  Console.print(`\n${MESSAGE.result}`);
  for (let round = 0; round < repeatNum; round += 1) {
    racingResult = playOneRound(racingResult);
    printCarLocation(racingResult);
    Console.print('\n');
  }

  const winners = getWinners(racingResult);
  printWinners(winners);
};

export default startRacing;
