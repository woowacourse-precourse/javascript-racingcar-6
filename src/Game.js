/* eslint-disable import/no-unresolved */
/* eslint-disable class-methods-use-this */

import { MissionUtils } from '@woowacourse/mission-utils';

class Game {
  constructor(carNames, count) {
    this.carNames = carNames;
    this.count = count;
    this.carsMap = new Map();
    for (const name of carNames) {
      this.carsMap.set(name, '');
    }
  }

  randomNumbers() {
    const randomNumbers = [];
    for (let i = 0; i < this.carNames.length; i += 1) {
      randomNumbers.push(MissionUtils.Random.pickNumberInRange(0, 9));
    }
    return randomNumbers;
  }

  goStop() {
    const randomNumbers = this.randomNumbers();
    for (let i = 0; i < randomNumbers.length; i += 1) {
      if (randomNumbers[i] >= 4) {
        const carName = this.carNames[i];
        const currentValue = this.carsMap.get(carName);
        this.carsMap.set(carName, `${currentValue}-`);
      }
    }
    return this.carsMap;
  }

  mostMoved() {
    this.printRound();
    const mostMoved = [];
    let maxLength = 0;

    this.carsMap.forEach((value, key) => {
      const valueLength = value.length;
      if (valueLength === maxLength) {
        mostMoved.push(key);
      }
      if (valueLength > maxLength) {
        maxLength = valueLength;
        mostMoved.length = 0;
        mostMoved.push(key);
      }
    });

    return mostMoved;
  }
}

export default Game;
