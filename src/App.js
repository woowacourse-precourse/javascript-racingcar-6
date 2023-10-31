import Validation from "./Validation";
import CarRacingGame from "./CarRacingGame";
import Car from "./Car";
import { Console } from "@woowacourse/mission-utils";

class App {
  /**@constructor */
  constructor() {
    /**@type {CarRacingGame} */
    this.carRacingGame = new CarRacingGame();
  }
  async play() {
    await this.readCarNames();
  }

  async readCarNames() {
    const answer = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const cars = answer.split(",");
    cars.forEach((car) => {
      Validation.validationCarName(car);
    });
    Validation.validationDuplicateCarName(cars);
    this.carRacingGame.setCars(cars.map((car) => new Car(car)));
    await this.readTryCount();
  }

  async readTryCount() {
    const answer = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    Validation.validationCount(answer);
    this.RacingResult(answer);
  }

  /**
   * @param {number} count
   * @returns {void}
   */
  RacingResult(count) {
    Console.print(`\n${"실행 결과"}`);
    this.carRacingGame.moveForward(count, (results) => {
      results.forEach(({ name, distance }) => {
        Console.print(`${name} : ${"-".repeat(distance)}`);
      });
      Console.print(" ");
    });
    Console.print(
      `${"최종 우승자"} : ${this.carRacingGame.getWinner().join(", ")}`
    );
  }
}

export default App;
