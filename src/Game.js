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

  createCarsObject() {
    const carsObject = {};
    for (const name of this.carNames) {
      carsObject[name] = '';
    }
    return carsObject;
  }

  goStop() {
    const carsObject = this.createCarsObject();
    const randomNumbers = this.randomNumbers();
    for (let i = 0; i < randomNumbers.length; i += 1) {
      if (randomNumbers[i] >= 4) {
        const carName = this.carNames[i];
        carsObject[carName] += '-';
      }
    }
    return carsObject;
  }
}

export default Game;
