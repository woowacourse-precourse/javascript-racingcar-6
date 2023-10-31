import { MissionUtils } from '@woowacourse/mission-utils';

const PrintResults = (user, advanceByRound) => {
  for (const CAR of user) {
    if (!advanceByRound.has(CAR)) advanceByRound.set(CAR, '');

    const RANDOM_NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);

    if (RANDOM_NUMBER >= 4) {
      advanceByRound.set(CAR, advanceByRound.get(CAR) + '-');
    }

    MissionUtils.Console.print(`${CAR} : ${advanceByRound.get(CAR)}`);
  }
  MissionUtils.Console.print('');

  return advanceByRound;
};

export default PrintResults;
