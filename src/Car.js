import {Random} from '@woowacourse/mission-utils';
import CONSTANTS from '../utils/Constants';
import MESSAGES from '../utils/Messages';

class Car {
  constructor(name) {
    this.name = name;
    this.progressStatus = '';
  }
  progressDependingOnValue() {
    const value = Random.pickNumberInRange(CONSTANTS.minimumValue, CONSTANTS.maximumValue);
    if (value >= CONSTANTS.progressValue) this.progressStatus += MESSAGES.progressBar;
  }
  getProgressStatus() {
    return this.name + MESSAGES.resultDelimeter + this.progressStatus;
  }
}

export default Car;
