import { FORWARD } from '../utils/constants';
import getRandomNumber from '../utils/getRandomNumber';

class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
  }

  forward() {
    const randomNumber = getRandomNumber();
    if (randomNumber >= FORWARD.CONDITION_NUM) {
      this.moveCount += FORWARD.TRUE;
    }
  }

  getMoveCount() {
    return this.moveCount;
  }

  getCarName() {
    return this.name;
  }
}

export default Car;
