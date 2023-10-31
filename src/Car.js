import {Random} from '@woowacourse/mission-utils';
import CONSTANTS from '../utils/Constants';
import MESSAGES from '../utils/Messages';

class Car {
  constructor(name) {
    this[CONSTANTS.nameKey] = name;
    this[CONSTANTS.progressStatusKey] = '';
  }

  progressDependingOnValue() {
    const value = Random.pickNumberInRange(CONSTANTS.minimumValue, CONSTANTS.maximumValue);
    if (value >= CONSTANTS.progressValue) this.progressStatus += MESSAGES.progressBar;
  }

  getProgressStatus() {
    return this[CONSTANTS.nameKey] + MESSAGES.resultDelimeter + this[CONSTANTS.progressStatusKey];
  }
}

export default Car;
