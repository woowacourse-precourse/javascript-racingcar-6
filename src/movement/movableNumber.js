import { Random } from "@woowacourse/mission-utils";

class MovableNumber {
  generateRandomNumber() {
    const randomMoveNumber = Random.pickNumberInRange(0, 9);
    return randomMoveNumber;
  }
}
export default MovableNumber;
