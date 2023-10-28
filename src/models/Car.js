import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(carName) {
    this.carName = carName;
    this.position = '';
  }

  move() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.setPosition('-');
    }
  }

  setPosition(position) {
    this.position += position;
  }
}

export default Car;
