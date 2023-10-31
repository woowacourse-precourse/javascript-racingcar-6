import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  createRandomNumber = () => {
    return Random.pickNumberInRange(0, 9);
  };

  makeStepForwardOrStop = () => {
    const number = this.createRandomNumber();

    if (number > 3) {
      this.step += 1;
    }
  };
}

export default Car;
