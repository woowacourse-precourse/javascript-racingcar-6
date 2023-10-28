import {Random} from '@woowacourse/mission-utils';
import CONSTANTS from '../utils/Constants';

class Car {
  constructor(name) {
    this.name = name;
  }
  progressDependingOnValue() {
    const value = Random.pickNumberInRange(CONSTANTS.minimumValue, CONSTANTS.maximumValue);
  }
}

export default Car;
