import { Random } from "@woowacourse/mission-utils";

class Move {
  async getRandomNumber(min, max) {
    let RandomNumber = await Random.pickNumberInRange(min, max);
    return RandomNumber;
  }
  async isAbleToMove(number) {
    if (number >= 4) return true;
    return false;
  }
}
export default Move;
