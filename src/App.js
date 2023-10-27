import { Console } from "@woowacourse/mission-utils";
import Car from "./Car.js";

class App {
  #carNames = [];
  #moveCount;

  async play() {
    await this.setCarNames();
  }

  async setCarNames() {
    const inputArray = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    inputArray.split(",").forEach((name) => {
      const car = new Car(name);
      this.#carNames.push(car);
    });
    await this.movementCount();
  }

  async movementCount() {
    this.#moveCount =
      await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  }
}

export default App;
