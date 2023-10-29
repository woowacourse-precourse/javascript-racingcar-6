import { MissionUtils } from '@woowacourse/mission-utils';

const PrintResults = (user, gameNumber) => {
  const RACING_CAR = new Map();

  for (let i = 0; i < user.length; i++) {
    RACING_CAR.set(user[i], '');
  }

  for (let index = 0; index < gameNumber; index += 1) {
    user.forEach((racingCar) => {
      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);

      if (RANDOM_NUMBER >= 4) {
        RACING_CAR.set(racingCar, RACING_CAR.get(racingCar) + '-');
      }

      MissionUtils.Console.print(`${racingCar} : ${RACING_CAR.get(racingCar)}`);
    });

    MissionUtils.Console.print('\n');
  }

  return RACING_CAR;
};

export default PrintResults;
