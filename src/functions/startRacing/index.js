import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../constants/message';
import getRacingCars from './getRacingCars';
import getRepeatNum from './getRepeatNum';
import playOneRound from './playOneRound';
import printCarLocation from './printCarLocation';

const startRacing = async () => {
  const racingCarList = await getRacingCars();
  const repeatNum = await getRepeatNum();

  let prevRoundResult = racingCarList.reduce((acc, car) => {
    acc[car] = 0;
    return acc;
  }, {});

  Console.print(`\n${MESSAGE.result}`);
  for (let round = 0; round < repeatNum; round += 1) {
    const currentRoundResult = playOneRound(prevRoundResult);
    printCarLocation(currentRoundResult);
    prevRoundResult = currentRoundResult;
  }
};

export default startRacing;
