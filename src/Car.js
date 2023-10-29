import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.randomNumber = this.createRandomNumber();
  }

  createRandomNumber = () => {
    const number = Random.pickNumberInRange(1, 9);
    return number;
  };
}
export { Car };
