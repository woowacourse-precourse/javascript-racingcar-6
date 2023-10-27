import { MissionUtils } from '@woowacourse/mission-utils';
import canGo from './canGo';

const playOneRound = (racingResult) => {
  const copiedRacingResult = { ...racingResult };
  const racingCarList = Object.keys(copiedRacingResult);

  racingCarList.forEach((racingCar) => {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (canGo(randomNum)) {
      copiedRacingResult[racingCar] += 1;
    }
  });

  return copiedRacingResult;
};

export default playOneRound;
