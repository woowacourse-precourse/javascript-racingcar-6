import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.progress = '';
  }

  moveOrStop() {
    const randomNumber = Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) {
      this.progress += '-';
    }
  }
}

export default Car;
