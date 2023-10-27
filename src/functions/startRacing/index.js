import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../constants/message';
import getRacingCars from './getRacingCars/index';
import getRepeatNum from './getRepeatNum/index';
import playOneRound from './playOneRound/index';
import printCarLocation from './printCarLocation';

const startRacing = async () => {
  const racingCarList = await getRacingCars();
  const repeatNum = await getRepeatNum();

  let racingCarLocation = racingCarList.reduce((acc, car) => {
    acc[car] = 0;
    return acc;
  }, {});

  Console.print(`\n${MESSAGE.result}`);
  for (let round = 0; round < repeatNum; round += 1) {
    racingCarLocation = playOneRound(racingCarLocation);
    printCarLocation(racingCarLocation);
    Console.print('\n');
  }
};

export default startRacing;
