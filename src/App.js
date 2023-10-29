import { Console } from "@woowacourse/mission-utils";
import selectWinner from "./utils/selectWinner.js";
import moveWithRandomNum from "./utils/moveWithRandomNum.js";
import {
  hasSameName,
  isIntegerNumber,
  isNameLengthUnderFive,
  isValidCountInput,
  isValidNameInput,
} from "./utils/validation.js";
import inputFunc from "./utils/inputFunc.js";

class App {
  async play() {
    const carsArr = await inputFunc.getCarNames();
    isValidNameInput(carsArr);
    hasSameName(carsArr);

    const carsWithMoveNum = {};
    carsArr.forEach((car) => {
      isNameLengthUnderFive(car);
      carsWithMoveNum[car] = 0;
    });

    const count = await inputFunc.getCountNumber();
    isValidCountInput(count);
    isIntegerNumber(count);

    const lastCount = count;
    let currentCount = 0;

    while (currentCount < lastCount) {
      moveWithRandomNum(carsArr, carsWithMoveNum);
      Console.print("");
      currentCount++;
    }

    const winner = selectWinner(carsArr, carsWithMoveNum);
    Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }
}

const app = new App();
app.play();

export default App;
