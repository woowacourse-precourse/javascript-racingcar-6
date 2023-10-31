import {MissionUtils} from '@woowacourse/mission-utils';

class Computer {
  #carList;
  #round;

  constructor() {
    this.#carList = [];
    this.#round = 0;
  }

  set round(input) {
    if (!Number.isInteger(input) || input <= 0) {
      throw new Error('[ERROR] 0보다 큰 정수가 아님');
    }

    this.#round = input;
  }

  get round() {
    return this.#round;
  }
}

export default Computer;
