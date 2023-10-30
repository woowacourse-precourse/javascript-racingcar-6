import { MissionUtils } from '@woowacourse/mission-utils';
import { ERRORS } from '../constants/errors.js';
import { throwError } from '../utils/throwError.js';

class CarModel {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randNum = MissionUtils.Random.pickNumberInRange(0, 9);

    return randNum >= 4 && this.position++;
  }
}

export default CarModel;
