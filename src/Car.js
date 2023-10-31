import { Console, Random } from '@woowacourse/mission-utils';
import { CAR } from './constants/constants.js';

class Car {
  constructor(name) {
    this.name = name;
    this.score = [];
  }

  randomGoAndStop() {
    const goAndStopNumber = Random.pickNumberInRange(
      CAR.rangeStartNumber,
      CAR.rangeEndNumber,
    );

    if (goAndStopNumber >= CAR.baseNumber) this.score.push(CAR.goMark);
  }

  getCurrentScore() {
    Console.print(`${this.name} : ${this.score.join('')}`);
  }
}

export default Car;
