import { Random } from '@woowacourse/mission-utils';
class Car {
  constructor(name) {
    this.name = name;
    this.moveCount = 0;
    this.randomNumber = -1;
  }

  async generateRandomNumber() {
    return await Random.pickNumberInRange(0, 9);
  }
}

export default Car;
