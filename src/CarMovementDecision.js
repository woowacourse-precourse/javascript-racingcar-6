import { Random } from "@woowacourse/mission-utils";
import { MIN_MOVE_THRESHOLD } from "./utils/constants.js";

class CarMovementDecision {
  canMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= MIN_MOVE_THRESHOLD;
  }
}

export default CarMovementDecision;
