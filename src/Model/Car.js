import { Random } from "@woowacourse/mission-utils";

const MIN_NUMBER = 1;
const MAX_NUMBER = 9;
const FORWARD_CONDITION = 4;
const DISTANCE_CHARACTER = '-';

export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = '';
  }

  async attemptForward() {
    if (this.isReady()) {
      this.runForward();
    }
  }

  runForward() {
    this.distance += DISTANCE_CHARACTER;
  }

  isReady() {
    if (this.checkForwardCondition()) {
      return true;
    }

    return false;
  }

  checkForwardCondition() {
    const randomNumber = Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);
    if (randomNumber >= FORWARD_CONDITION) {
      return true;
    }

    return false;
  }

  getName() {
    return this.name;
  }

  getDistance() {
    return this.distance.length;
  }
}