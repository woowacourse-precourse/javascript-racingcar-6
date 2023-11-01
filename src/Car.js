/* eslint-disable import/extensions */
import { Random } from '@woowacourse/mission-utils';

export default class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }

  static entryPlayer(carsName) {
    this.carGroup = [];
    carsName.forEach((element) => {
      const car = new Car(element);
      this.carGroup.push(car);
    });
    return this.carGroup;
  }

  generateRandomNum() {
    this.RANDOM_NUMER = Random.pickNumberInRange(0, 9);
    return this.RANDOM_NUMER;
  }

  canMove() {
    this.CAN_MOVE_FORWARD = 4;
    this.GET_RANDOM = this.generateRandomNum();
    if (this.GET_RANDOM >= this.CAN_MOVE_FORWARD) {
      this.move += 1;
    }
  }

  getName() {
    return this.name;
  }

  getMove() {
    return this.move;
  }
}
