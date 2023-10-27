import { Console } from '@woowacourse/mission-utils';
import { CONDITION, ERROR, MESSAGE } from './constants/index';
import Car from './Car';
import Random from './Random';
import Refree from './Referee';

class App {
  #cars;

  async play() {
    const carNames = await Console.readLineAsync(MESSAGE.CAR_NAME);
    const carNameArray = carNames.split(',');
    App.#validateNameLength(carNameArray);

    const tryCount = await Console.readLineAsync(MESSAGE.TRY_COUNT);
    App.#validateTryCount(tryCount);

    this.#cars = carNameArray.map((carName) => new Car(carName));
    this.#printRaceResult(tryCount);
    this.#printWinners();
  }

  #printRaceResult(count) {
    Console.print(MESSAGE.RESULT);

    for (let i = 0; i < count; i += 1) {
      this.#cars.forEach((car) => car.race(Random.createRandomNumber()));
      this.#cars.forEach((car) =>
        Console.print(MESSAGE.RACE(car.getName(), car.getForwardCount()))
      );
      Console.print('');
    }
  }

  #printWinners() {
    const winners = Refree.judge(this.#cars);
    Console.print(MESSAGE.WINNERS(winners));
  }

  static #validateNameLength(carNameArray) {
    if (CONDITION.NAME_LENGTH(carNameArray)) {
      throw new Error(ERROR.NAME_LENGTH);
    }
  }

  static #validateTryCount(count) {
    if (CONDITION.TRY_COUNT(Number(count))) {
      throw new Error(ERROR.TRY_COUNT);
    }
  }
}

export default App;
