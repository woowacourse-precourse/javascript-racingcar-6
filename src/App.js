import { Console } from '@woowacourse/mission-utils';
import { CONDITION, ERROR, MESSAGE } from './constants/index';
import Car from './Car';
import Random from './Random';
import Refree from './Referee';

class App {
  #cars;

  async play() {
    const carNames = await Console.readLineAsync(MESSAGE.CAR_NAME);
    App.#validateCarRaceEntry(carNames);

    const carNameArray = carNames.split(',');
    App.#validateCarNameLength(carNameArray);

    const tryCount = await Console.readLineAsync(MESSAGE.TRY_COUNT);
    App.#validateTryCount(tryCount);

    this.#cars = carNameArray.map((carName) => new Car(carName));
    this.#startCarRace(Number(tryCount));
    this.#judgeCarRaceWinner();
  }

  #startCarRace(count) {
    Console.print(MESSAGE.RESULT);

    for (let i = 0; i < count; i += 1) {
      this.#cars.forEach((car) => car.race(Random.createRandomNumber()));
      this.#cars.forEach((car) =>
        Console.print(MESSAGE.RACE(car.getName(), car.getForwardCount()))
      );
      Console.print('');
    }
  }

  #judgeCarRaceWinner() {
    const winners = Refree.judge(this.#cars);
    Console.print(MESSAGE.WINNERS(winners));
  }

  static #validateCarRaceEntry(carNames) {
    if (CONDITION.INVALID_CAR_RACE_ENTRY(carNames)) {
      throw new Error(ERROR.CAR_RACE_ENTRY);
    }
  }

  static #validateCarNameLength(carNameArray) {
    if (CONDITION.INVALID_NAME_LENGTH(carNameArray)) {
      throw new Error(ERROR.NAME_LENGTH);
    }
  }

  static #validateTryCount(count) {
    if (CONDITION.INVALID_TRY_COUNT(count)) {
      throw new Error(ERROR.TRY_COUNT);
    }
  }
}

export default App;
