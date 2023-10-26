import { Console } from "@woowacourse/mission-utils";
import selectWinner from "./utils/selectWinner.js";
import moveWithRandomNum from "./utils/moveWithRandomNum.js";
import { IsInputRightForm, IsNameLengthUnderFive } from "./utils/validation.js";

class App {
  async play() {
    const carsInput =
      await Console.readLineAsync("경주할 자동차 이름을 입력하세요.");
    IsInputRightForm(carsInput);
    const cars = carsInput.split(",");
    const carsWithMoveNum = {};
    cars.forEach((car) => {
      IsNameLengthUnderFive(car);
      carsWithMoveNum[car] = 0;
    });
    const lastCount = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    let count = 0;
    while (count < lastCount) {
      moveWithRandomNum(cars, carsWithMoveNum);
      Console.print("");
      count++;
    }
    const winner = selectWinner(cars, carsWithMoveNum);
    Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }
}

const app = new App();
app.play();

export default App;
