import { Random } from "@woowacourse/mission-utils";

class Move {
  async getRandomNumber() {
    let RandomNumber = await Random.pickNumberInRange(0, 9);
    return RandomNumber;
  }
  async isAbleToMove(number) {
    if (number >= 4) return true;
    return false;
  }
}
export default Move;
