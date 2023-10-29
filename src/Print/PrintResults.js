import { MissionUtils } from '@woowacourse/mission-utils';

const PrintResults = (user, gameNumber) => {
  const RACING_CAR = new Map();

  for (let index = 0; index < gameNumber; index += 1) {
    for (const CAR of user) {
      if (!RACING_CAR.has(CAR)) RACING_CAR.set(CAR, '');

      const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);

      if (RANDOM_NUMBER >= 4) {
        RACING_CAR.set(CAR, RACING_CAR.get(CAR) + '-');
      }

      MissionUtils.Console.print(`${CAR} : ${RACING_CAR.get(CAR)}`);
    }

    MissionUtils.Console.print('\n');
  }

  return RACING_CAR;
};

export default PrintResults;
