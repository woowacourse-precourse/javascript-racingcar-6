import { Console, Random } from "@woowacourse/mission-utils";
import { MESSAGE_TABLE } from "./constants";
class App {
  async play() {}
  async carNameInput() {
    const userInput = await Console.readLineAsync(MESSAGE_TABLE.START_GAME);
    return userInput.split(",");
  }
  async driveNumberInput() {
    const userInput = await Console.readLineAsync(MESSAGE_TABLE.TRY_NUMBER);
    return userInput;
  }
  pickRandomNumber() {
    const number = Random.pickRandomNumber(0, 9);
    return number;
  }
  moveForward(num) {
    if (num >= 4) {
      return true;
    }
    return false;
  }
  winnerOutput(obj) {
    let max = 0;
    for (let key in obj) {
      let temp = obj[key].length;
      max = Math.max(max, temp);
    }
  }
}

export default App;
