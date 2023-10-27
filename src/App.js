import { Console } from "@woowacourse/mission-utils";
import selectWinner from "./utils/selectWinner.js";
import moveWithRandomNum from "./utils/moveWithRandomNum.js";
import {
  isCountInputValid,
  isNameLengthUnderFive,
} from "./utils/validation.js";

class App {
  async play() {
    const carsInput =
      await Console.readLineAsync("경주할 자동차 이름을 입력하세요.");
    const cars = carsInput.split(",");
    const carsWithMoveNum = {};
    cars.forEach((car) => {
      isNameLengthUnderFive(car);
      carsWithMoveNum[car] = 0;
    });
    const countInput =
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    isCountInputValid(countInput);
    const lastCount = countInput;
    let currentCount = 0;
    while (currentCount < lastCount) {
      moveWithRandomNum(cars, carsWithMoveNum);
      Console.print("");
      currentCount++;
    }
    const winner = selectWinner(cars, carsWithMoveNum);
    Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }
}

const app = new App();
app.play();

export default App;
