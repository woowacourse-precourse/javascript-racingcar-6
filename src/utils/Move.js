import { Console, Random } from "@woowacourse/mission-utils";

class Move {
  async getRandomNumber(min, max) {
    let RandomNumber = await Random.pickNumberInRange(min, max);
    return RandomNumber;
  }
  async isAbleToMove(number) {
    if (number >= 4) return true;
    return false;
  }
  async moveCurrent(obj) {
    for (const key in obj) {
      let dashes = "-".repeat(obj[key]);
      Console.print(key + " : " + dashes);
    }
    console.log("");
  }
}
export default Move;
