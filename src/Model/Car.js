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
    if (this.isReadyToRunForward()) {
      this.runForward();
    }
  }

  runForward() {
    this.distance += DISTANCE_CHARACTER;
  }

  isReadyToRunForward() {
    const randomNumber = Random.pickNumberInRange(MIN_NUMBER, MAX_NUMBER);

    return randomNumber >= FORWARD_CONDITION;
  }

  getName() {
    return this.name;
  }

  getDistance() {
    return this.distance.length;
  }
}