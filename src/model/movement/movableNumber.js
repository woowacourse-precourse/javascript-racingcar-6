import { Random } from "@woowacourse/mission-utils";

class MovableNumber {
  generateRandomNumber() {
    const randomMoveNumber = Random.pickNumberInRange(0, 9);
    return randomMoveNumber;
  }

  isMovable() {
    const RandomNumber = this.generateRandomNumber();
    if (RandomNumber >= 4) {
      return true;
    }
    return false;
  }
}
export default MovableNumber;
