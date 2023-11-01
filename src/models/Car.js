import { Random } from '@woowacourse/mission-utils';

class Car {
  #position = 0;

  static randomNumberRange = Object.freeze({
    from: 0,
    to: 9,
  });

  static FORWARD_THRESHOLD = 4;

  constructor(name) {
    this.name = name;
  }

  move() {
    const isMoving = Car.shouldCarMove();

    if (isMoving) {
      this.#position += 1;
    }
  }

  getPosition() {
    return this.#position;
  }

  static shouldCarMove() {
    const { from, to } = Car.randomNumberRange;
    return Random.pickNumberInRange(from, to) >= Car.FORWARD_THRESHOLD;
  }
}

export default Car;
