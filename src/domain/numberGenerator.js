import { MissionUtils } from '@woowacourse/mission-utils';
// import { getCarName } from './inputView.js';

export const makeRandomNumberAndJudge = async (tryNumber) => {
  const RANDOM_NUMBER_ARRAY = [];
  for (let i = 0; i < tryNumber; i++) {
    const NUMBER = MissionUtils.Random.pickNumberInRange(0, 9);
    if (NUMBER > 4) {
      RANDOM_NUMBER_ARRAY.push(NUMBER);
    }
  }
  MissionUtils.Console.print(RANDOM_NUMBER_ARRAY);
};
