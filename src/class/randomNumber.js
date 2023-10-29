import { Random, Console } from '@woowacourse/mission-utils';

class CreateCarMoveCount {
  constructor() {
    this.number = [];
  }

  createRandomNumber() {
    const getNumber = Random.pickNumberInRange(0, 9);
    this.number.push(getNumber);
    return this.number;
  }

}
export default CreateCarMoveCount;