import { Random } from "@woowacourse/mission-utils";

class CarMovementDecision {
  canMove() {
    const randomNumber = Random.pickNumberInRange(0, 9);
    return randomNumber >= 4;
  }
}

export default CarMovementDecision;
