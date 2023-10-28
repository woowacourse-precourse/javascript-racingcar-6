import { Random } from '@woowacourse/mission-utils';

class NumberGenerator {
  static createRandomNumbers(minRange = 0, maxRange = 9, repeatNumber = 1) {
    const randomNumbers = [];

    if (repeatNumber === 1) {
      randomNumbers.push(Random.pickNumberInRange(minRange, maxRange));
      return randomNumbers;
    }
    while (randomNumbers.length < repeatNumber) {
      const number = Random.pickNumberInRange(minRange, maxRange);
      if (randomNumbers.includes(number)) {
        randomNumbers.push(number);
      }
    }
    return randomNumbers;
  }
}

export default NumberGenerator;
