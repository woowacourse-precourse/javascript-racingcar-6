/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */

import { MissionUtils } from '@woowacourse/mission-utils';

class Game {
  constructor(carNames, count) {
    this.carNames = carNames;
    this.count = count;
  }

  randomNumbers() {
    const randomNumbers = [];
    for (let i = 0; i < this.carNames.length; i += 1) {
      randomNumbers.push(MissionUtils.Random.pickNumberInRange(0, 9));
    }
    return randomNumbers;
  }
}

export default Game;
