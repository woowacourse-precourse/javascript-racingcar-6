import { MissionUtils } from '@woowacourse/mission-utils';

const PrintResults = (user, racingCar) => {
  for (const CAR of user) {
    if (!racingCar.has(CAR)) racingCar.set(CAR, '');

    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);

    if (RANDOM_NUMBER >= 4) {
      racingCar.set(CAR, racingCar.get(CAR) + '-');
    }

    MissionUtils.Console.print(`${CAR} : ${racingCar.get(CAR)}`);
  }
  MissionUtils.Console.print('');

  return racingCar;
};

export default PrintResults;
