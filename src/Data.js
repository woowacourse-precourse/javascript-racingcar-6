import { Random } from '@woowacourse/mission-utils';
import { RACING_GAME } from './Constant.js';

class Data {
  generateRandomNumbers() {
    return Random.pickNumberInRange(RACING_GAME.minNumber, RACING_GAME.maxNumber);
  }

  carNamesTypeConversion(carNames) {
    return carNames.split(RACING_GAME.delimiter);
  }
}

export default Data;