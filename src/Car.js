import {Random} from '@woowacourse/mission-utils';
import CONSTANTS from '../utils/Constants';

class Car {
  constructor(name) {
    this.name = name;
    this.progressStatus = CONSTANTS.initialStatus;
  }
  progressDependingOnValue() {
    const value = Random.pickNumberInRange(CONSTANTS.minimumValue, CONSTANTS.maximumValue);
    if (value >= CONSTANTS.progressValue) this.progressStatus += 1;
  }
}

export default Car;
