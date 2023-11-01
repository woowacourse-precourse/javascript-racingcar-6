import { Random } from "@woowacourse/mission-utils";
import { MOVE } from "../../utils/constants.js";

class MovableNumber {
  generateRandomNumber() {
    const randomMoveNumber = Random.pickNumberInRange(0, 9);
    return randomMoveNumber;
  }

  isMovable() {
    const RandomNumber = this.generateRandomNumber();
    if (RandomNumber >= MOVE.MOVABLE_THRESHOLD) {
      return true;
    }
    return false;
  }
}
export default MovableNumber;
