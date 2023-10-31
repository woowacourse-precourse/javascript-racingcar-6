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

  sortArrayAscending(gameMovement) {
    return gameMovement.slice().sort((a, b) => a - b);
  },

  convertToHyphenOrSpace(gameMovement) {
    return gameMovement.map((number) => {
      if (number >= 4 && number <= 9) {
        return '-';
      }
      if (number >= 0 && number <= 3) {
        return ' ';
      }
    });
  },
};

export default Random;
