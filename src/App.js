import { Console } from '@woowacourse/mission-utils';
import {
  INPUT_MESSAGE,
  ERROR_MESSAGE,
  CONDITION,
  OUTPUT_MESSAGE,
} from './constants.js';
import Car from './Car.js';
import Random from './Random.js';
import Refree from './Referee.js';

class App {
  async play() {
    const carNames = await Console.readLineAsync(INPUT_MESSAGE.CAR_NAME);
    const carNameArray = carNames.split(',');
    App.#validateNameLength(carNameArray);

    const tryCount = await Console.readLineAsync(INPUT_MESSAGE.TRY_COUNT);
    App.#validateTryCount(tryCount);

    const cars = carNameArray.map((carName) => new Car(carName));

    Console.print(OUTPUT_MESSAGE.RESULT);
    for (let i = 0; i < tryCount; i++) {
      cars.forEach((car) => car.race(Random.createRandomNumber()));
      cars.forEach((car) =>
        Console.print(OUTPUT_MESSAGE.RACE(car.getName(), car.getForwardCount()))
      );
      Console.print('');
    }

    const winners = Refree.judge(cars);
    Console.print(OUTPUT_MESSAGE.WINNERS(winners));
  }

  static #validateNameLength(carNameArray) {
    carNameArray.forEach((carName) => {
      if (CONDITION.NAME_LENGTH(carName)) {
        throw new Error(ERROR_MESSAGE.NAME_LENGTH);
      }
    });
  }

  static #validateTryCount(count) {
    if (CONDITION.TRY_COUNT(Number(count))) {
      throw new Error(ERROR_MESSAGE.TRY_COUNT);
    }
  }
}

export default App;
