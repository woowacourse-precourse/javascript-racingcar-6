import { Console } from "@woowacourse/mission-utils";
import Utility from "./utils/Utility.js";
import { MESSAGES } from "./Constants.js";

class App {
  async play() {
    const util = new Utility();
    console.log(MESSAGES.CAR_NAME_INPUT);
    const carNamesInput = await Console.readLineAsync("");
    const carNames = carNamesInput.replace(/\s/g, "").split(",");
    const carNamesObj = util.createToRightObj(carNames);
    console.log(MESSAGES.TRY_NUMBER_INPUT);
    const tryNumber = await Console.readLineAsync("");

    for (let currentTry = 0; currentTry < tryNumber; currentTry++) {
      for (let idx = 0; idx < carNames.length; idx++) {
        const randomNumber = await util.getRandomNumber(0, 9);
        const canMove = util.isAbleToMove(randomNumber);
        if (canMove) {
          carNamesObj[carNames[idx]]++;
        }
      }
      util.moveCurrent(carNamesObj);
    }
    let winnerStr = util.whosWinner(carNamesObj);
    Console.print(MESSAGES.WINNER + winnerStr);
  }
}
export default App;
