import { MissionUtils } from '@woowacourse/mission-utils';

const Random = {
  setRandomNumbers(gameCount) {
    const computer = [];
    while (computer.length < gameCount) {
      const number = MissionUtils.Random.pickNumberInRange(0, 9);
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  },
};

export default Random;
