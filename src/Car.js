import { Random } from '@woowacourse/mission-utils';

class Car {
  #car;

  #randomNumber;

  constructor(car) {
    this.#car = car;
    this.randomNumber = 0;
    this.getRandomNumber();
  }

  getRandomNumber() {
    this.randomNumber = Random.pickNumberInRange(1, 9);
    return this.randomNumber;
  }
}

export default Car;
