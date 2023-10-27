import { MissionUtils } from '@woowacourse/mission-utils';

const playOneRound = (racingCarLocation) => {
  const copiedRacingCarLocation = { ...racingCarLocation };
  const racingCarList = Object.keys(copiedRacingCarLocation);

  racingCarList.forEach((racingCar) => {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNum < 4) {
      copiedRacingCarLocation[racingCar] += 1;
    }
  });

  return copiedRacingCarLocation;
};

export default playOneRound;
