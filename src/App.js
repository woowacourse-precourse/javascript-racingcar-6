import { Console, Random } from "@woowacourse/mission-utils";
import { GAME_MESSAGE, ERROR_MESSAGE } from "./constants.js";

class App {
  async play() {
    const InputCarNames = await Console.readLineAsync(GAME_MESSAGE.INPUT_CAR);

    const carNames = InputCarNames.split(",");
    const cars = carNames.map((name) => ({ name, position: 0 }));

    this.checkCarNameLength(carNames);

    const InputTryCount = await Console.readLineAsync(
      GAME_MESSAGE.INPUT_TRYCOUNT
    );
    const tryCount = this.checkInputNumber(InputTryCount);

    Console.print(GAME_MESSAGE.RESULT);
    for (let i = 0; i < tryCount; i += 1) {
      this.GoOrStop(cars);
      this.CurrentStatus(cars);
    }

    this.getWinner(cars);
  }

  checkCarNameLength(carNames) {
    carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error(ERROR_MESSAGE.CAR_NAME_LENGTH);
      }
    });
  }

  checkInputNumber(InputTryCount) {
    if (isNaN(InputTryCount)) {
      throw new Error(ERROR_MESSAGE.INPUT_NUMBER);
    }
    return Number(InputTryCount);
  }

  GoOrStop(cars) {
    cars.forEach((car) => {
      const randomNum = Random.pickNumberInRange(0, 9);
      if (randomNum >= 4) {
        car.position += 1;
      }
    });
  }

  CurrentStatus(cars) {
    cars.forEach((car) => {
      Console.print(`${car.name} : ${"-".repeat(car.position)}`);
    });
    Console.print("\n");
  }

  getWinner(cars) {
    const maxPosition = Math.max(...cars.map((car) => car.position));
    const winners = cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    Console.print(`${GAME_MESSAGE.WINNER}${winners.join(", ")}`);
  }
}

export default App;
