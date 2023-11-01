import {Random} from '@woowacourse/mission-utils';
import CONSTANTS from '../utils/Constants';
import MESSAGES from '../utils/Messages';

class Car {
  constructor(name) {
    this[CONSTANTS.nameKey] = name;
    this[CONSTANTS.progressStatusKey] = CONSTANTS.initialStatus;
  }

  progressDependingOnValue() {
    const value = Random.pickNumberInRange(CONSTANTS.minimumValue, CONSTANTS.maximumValue);
    if (value >= CONSTANTS.progressValue) this.progressStatus += 1;
  }

  getProgressStatus() {
    const progressBar = MESSAGES.progressBar.repeat(this[CONSTANTS.progressStatusKey]);
    return this[CONSTANTS.nameKey] + MESSAGES.resultDelimeter + progressBar;
  }
}

export default Car;
