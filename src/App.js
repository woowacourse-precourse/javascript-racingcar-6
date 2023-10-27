import { Console } from '@woowacourse/mission-utils';
import {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  CONDITION,
  RACE_MESSAGE,
} from './constants.js';
import Car from './Car.js';
import Random from './Random.js';
import Refree from './Referee.js';

class App {
  #cars;

  async play() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME);
    const carNameArray = carNames.split(',');
    App.#validateNameLength(carNameArray);

    const tryCount = await Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT);
    App.#validateTryCount(tryCount);

    this.#cars = carNameArray.map((carName) => new Car(carName));
    this.#printRaceResult(tryCount);
    this.#printWinners();
  }

  #printRaceResult(count) {
    Console.print(RACE_MESSAGE.RESULT);

    for (let i = 0; i < count; i++) {
      this.#cars.forEach((car) => car.race(Random.createRandomNumber()));
      this.#cars.forEach((car) =>
        Console.print(RACE_MESSAGE.RACE(car.getName(), car.getForwardCount()))
      );
      Console.print('');
    }
  }

  #printWinners() {
    const winners = Refree.judge(this.#cars);
    Console.print(RACE_MESSAGE.WINNERS(winners));
  }

  static #validateNameLength(carNameArray) {
    if (CONDITION.NAME_LENGTH(carNameArray)) {
      throw new Error(ERROR_MESSAGE.NAME_LENGTH);
    }
  }

  static #validateTryCount(count) {
    if (CONDITION.TRY_COUNT(Number(count))) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT);
    }
  }
}

export default App;
