import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }

  createRandomNumber = () => {
    return Random.pickNumberInRange(0, 9);
  };
}

export default Car;
