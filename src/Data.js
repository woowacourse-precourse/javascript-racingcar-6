import { Random } from '@woowacourse/mission-utils';

class Data {
  generateRandomNumbers() {
    return Random.pickNumberInRange(0, 9);
  }

  carNamesTypeConversion(carNames) {
    return carNames.split(',');
  }
}

export default Data;