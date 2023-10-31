import { Random } from "@woowacourse/mission-utils";

class RandomNumber {
  createRandomNumber() {
    const PICK_NUMBER = Random.pickNumberInRange(0,9);
    return PICK_NUMBER;
  }
}
export default RandomNumber;