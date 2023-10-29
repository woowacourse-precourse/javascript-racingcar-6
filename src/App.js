import { Random, Console } from "@woowacourse/mission-utils";
import { COMMENT, ERROR } from "./constants.js";

class App {
  async play() {
    try {
      const carNames = await this.getCarNames();
      const numAttempts = await this.getNumAttempts();

      const cars = carNames.split(",").map((name) => ({ name, position: "-" }));

      for (let attempt = 0; attempt < numAttempts; attempt++) {
        cars.forEach((car) => {
          if (Random.pickNumberInRange(0, 9) >= 4) {
            car.position += "-";
          }
        });
        this.displayGameProgress(cars);
      }

      const winners = this.findWinners(cars);
      this.displayWinners(winners);
    } catch (error) {
      Console.print(error.message);
      return Promise.reject(error);
    }
  }

  async getCarNames() {
    const carNamesInput = await Console.readLineAsync(COMMENT.START);
    if (!carNamesInput) {
      throw new MyError(ERROR.NAME, ERROR.MESSAGE.CARS_NAME);
    }
    const carNames = carNamesInput.split(",");
    if (carNames.some((name) => name.length > 5)) {
      throw new MyError(ERROR.NAME, ERROR.MESSAGE.ONE_TO_FIVE);
    }
    return carNamesInput;
  }

  async getNumAttempts() {
    const numAttemptsInput = await Console.readLineAsync(COMMENT.ASK_INPUT);
    if (!numAttemptsInput) {
      throw new MyError(ERROR.NAME, ERROR.MESSAGE.ATTEMPT_INPUT);
    }
    const numAttempts = parseInt(numAttemptsInput, 10);
    if (isNaN(numAttempts)) {
      throw new MyError(ERROR.NAME, ERROR.MESSAGE.INVALID_INPUT);
    }
    return numAttempts;
  }

  displayGameProgress(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${car.position}`);
    });
    Console.print("\n");
  }

  findWinners(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position.length - 1));
    return cars.filter((car) => car.position.length - 1 === maxPosition);
  }

  displayWinners(winners) {
    const winnerNames = winners.map((winner) => winner.name).join(", ");
    Console.print(`최종 우승자: ${winnerNames}`);
  }
}

class MyError extends Error {
  constructor(value, ...params) {
    super(...params);
    this.message = [...params];
    this.name = value;
  }
}

export default App;
