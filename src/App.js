import Validation from "./Validation";
import CarRacingGame from "./CarRacingGame";
import Car from "./Car";
import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constant";

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
    const answer = await Console.readLineAsync(MESSAGE.INPUT_CAR_NAME);
    const cars = answer.split(",");
    cars.forEach((car) => {
      Validation.validationCarName(car);
    });
    Validation.validationDuplicateCarName(cars);
    this.carRacingGame.setCars(cars.map((car) => new Car(car)));
    await this.readTryCount();
  }

  async readTryCount() {
    const answer = await Console.readLineAsync(MESSAGE.INPUT_TRY_COUNT);
    Validation.validationCount(answer);
    this.RacingResult(answer);
  }

  /**
   * @param {number} count
   * @returns {void}
   */
  RacingResult(count) {
    Console.print(`\n${MESSAGE.GAME_RESULT}`);
    this.carRacingGame.moveForward(count, (results) => {
      results.forEach(({ name, distance }) => {
        Console.print(`${name} : ${"-".repeat(distance)}`);
      });
      Console.print(" ");
    });
    Console.print(
      `${MESSAGE.WINNER} : ${this.carRacingGame.getWinner().join(", ")}`
    );
  }
}

export default App;
