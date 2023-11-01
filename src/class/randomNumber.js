import { Random } from '@woowacourse/mission-utils';

class CreateCarMoveCount {
  constructor() {
  }

  createRandomNumber() {
    const getNumber = Random.pickNumberInRange(0, 9);
    return getNumber;
  }

}
export default CreateCarMoveCount;