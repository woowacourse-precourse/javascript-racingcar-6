import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../constants/message.js';
import getRacingCars from './getRacingCars/index.js';
import getRepeatNum from './getRepeatNum/index.js';
import playOneRound from './playOneRound/index.js';
import printCarLocation from './printLocation/index.js';

const startRacing = async () => {
  const racingCarList = await getRacingCars();
  const repeatNum = await getRepeatNum();

  const racingCarLocation = racingCarList.reduce((acc, car) => {
    acc[car] = 0;
    return acc;
  }, {});

  Console.print(`\n${MESSAGE.result}`);
  for (let round = 0; round < repeatNum; round++) {
    playOneRound(racingCarLocation);
    printCarLocation(racingCarLocation);
    Console.print('\n');
  }
};

export default startRacing;
