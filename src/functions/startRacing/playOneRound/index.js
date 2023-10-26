import { MissionUtils } from '@woowacourse/mission-utils';

const playOneRound = (racingCarLocation) => {
  const racingCarList = Object.keys(racingCarLocation);

  racingCarList.forEach((racingCar) => {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);
    const goOrNot = randomNum < 4 ? 0 : 1;
    racingCarLocation[racingCar] += goOrNot;
  });
};

export default playOneRound;
