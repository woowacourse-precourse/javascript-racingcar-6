import { MissionUtils } from '@woowacourse/mission-utils';

const playOneRound = (racingResult) => {
  const copiedRacingResult = { ...racingResult };
  const racingCarList = Object.keys(copiedRacingResult);

  racingCarList.forEach((racingCar) => {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum < 4) {
      copiedRacingResult[racingCar] += 1;
    }
  });

  return copiedRacingResult;
};

export default playOneRound;
