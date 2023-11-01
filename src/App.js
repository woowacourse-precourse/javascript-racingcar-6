/* eslint-disable class-methods-use-this */
import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "./Car.js";
import {
  isNumberAtLeast4,
  validateCount,
  validateName,
} from "./utils/validation.js";

class App {
  constructor() {
    this.cars = [];
    this.tryCount = 0;
  }

  async initGame() {
    const names = await this.inputCarNames();

    this.makeCarArray(names);

    await this.inputTryCount();
  }

  async inputTryCount() {
    const count = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n",
    );

    validateCount(count);

    this.tryCount = parseInt(count, 10);
  }

  async inputCarNames() {
    return MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
    );
  }

  makeCarArray(names) {
    names.split(",").forEach((name) => {
      validateName(name, this.cars);

      this.cars.push(new Car(name));
    });
  }

  startRacing() {
    MissionUtils.Console.print("\n실행 결과");

    for (let count = 0; count < this.tryCount; count += 1) {
      this.cars.forEach((car) => {
        this.moveForward(car);
        car.printState();
      });
      MissionUtils.Console.print("\n");
    }

    this.printWinner();
  }

  moveForward(car) {
    if (isNumberAtLeast4(MissionUtils.Random.pickNumberInRange(0, 9))) {
      car.goForward();
    }
  }

  getWinnersNames() {
    const maxForwardCount = Math.max(
      ...this.cars.map((car) => car.getForwardCount),
    );
    return this.cars
      .filter((car) => car.isWinner(maxForwardCount))
      .map((car) => car.getName);
  }

  printWinner() {
    const winners = this.getWinnersNames();
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  async play() {
    await this.initGame();

    this.startRacing();
  }
}

export default App;
