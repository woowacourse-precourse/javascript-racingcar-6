import { Console, Random } from "@woowacourse/mission-utils";

class Move {
  async getRandomNumber(min, max) {
    const RandomNumber = await Random.pickNumberInRange(min, max);
    return RandomNumber;
  }
  isAbleToMove(number) {
    if (number >= 4) return true;
    return false;
  }
  moveCurrent(obj) {
    for (const key in obj) {
      const dashes = "-".repeat(obj[key]);
      Console.print(key + " : " + dashes);
    }
    console.log("");
  }
}
export default Move;
