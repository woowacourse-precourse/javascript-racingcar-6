import { Random } from '@woowacourse/mission-utils';

class RandomNumberGenerator {
  constructor(userInputTryCount) {
    this.randomNumberArr = [];
    this.userInputTryCountNumber = Number(userInputTryCount);
  }

  generateRandomNumber() {
    for (let i = 0; i < this.userInputTryCountNumber; i++) {
      const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
      this.randomNumberArr.push(RANDOM_NUMBER);
    }

    return this.randomNumberArr;
  }
}

export default RandomNumberGenerator;
