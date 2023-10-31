import { Console } from "@woowacourse/mission-utils";
import Utility from "./utils/Utility.js";

class App {
  async play() {
    const util = new Utility();
    console.log(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    const carNamesInput = await Console.readLineAsync("");
    const carNames = carNamesInput.replace(/\s/g, "").split(",");
    const carNamesObj = util.createToRightObj(carNames);
    console.log("시도할 횟수는 몇 회인가요?");
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
    Console.print(`최종 우승자 : ${winnerStr}`);
  }
}
export default App;
