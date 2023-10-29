import { Random } from '@woowacourse/mission-utils';


class Car {
  checkMoveCondition(randomNum) {
    if (randomNum >= 4) {
      return true;
    }

    return false;
  }
}

export default Car;