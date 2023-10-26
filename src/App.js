import { Console } from "@woowacourse/mission-utils";
import Utility from "./utils/Utility.js";

class App {
  async play() {
    let util = new Utility();
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    let carNamesInput = await Console.readLineAsync("");
    let carNames = carNamesInput.replace(/\s/g, "").split(",");
    let carNamesObj = {};
    carNames.forEach((name) => {
      carNamesObj[name] = 0;
    });
    Console.print("시도할 횟수는 몇 회인가요?");
    let tryNumber = await Console.readLineAsync("");

    // 앞으로 갈지말지 정해서 객체에 반영
    for (let j = 0; j < tryNumber; j++) {
      for (let i = 0; i < carNames.length; i++) {
        let randomNumber = await util.getRandomNumber(0, 9);
        let canMove = await util.isAbleToMove(randomNumber);
        if (canMove) {
          carNamesObj[carNames[i]]++;
        }
      }
      await util.moveCurrent(carNamesObj);
    }
    let winnerStr = await util.whosWinner(carNamesObj);
    Console.print(`최종 우승자 : ${winnerStr}`);
  }
}
export default App;
