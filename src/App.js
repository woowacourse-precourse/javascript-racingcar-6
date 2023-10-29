import { Console, Random } from '@woowacourse/mission-utils';
import Validation from './modules/Validation.js';
import MESSAGE from './constants/message.js';
import CONDITION from './constants/condition.js';

class App {
  #cars = new Map();
  #numberOfTimes = 0;

  get cars() {
    return this.#cars;
  }

  set cars(info) {
    this.#cars = info;
  }

  get numberOfTimes() {
    return this.#numberOfTimes;
  }

  set numberOfTimes(number) {
    this.#numberOfTimes = number;
  }

  async play() {
    const answerOfCars = await Console.readLineAsync(MESSAGE.input.carName);
    this.cars = Validation.getNamesOfCar(answerOfCars, CONDITION.carNameLength);
    const answerOfNumber = await Console.readLineAsync(
      MESSAGE.input.numberOfTimes,
    );
    this.validateNumberOfTimes(answerOfNumber);
    this.printExecutionResult();
    this.printFinalWinner();
    return;
  }

  validateNumberOfTimes(answer) {
    const number = Number(answer);
    if (Number.isSafeInteger(number) && number > 0) {
      this.numberOfTimes = number;
    } else {
      throw new Error(MESSAGE.error.numberOfTimes);
    }
  }

  decideToMoveForward() {
    const random = Random.pickNumberInRange(
      CONDITION.rangeStart,
      CONDITION.rangeEnd,
    );
    return random >= CONDITION.movingForward;
  }

  printExecutionResult() {
    Console.print(MESSAGE.result.execution);
    const updatedCars = new Map([...this.cars]);
    for (let i = 1; i <= this.numberOfTimes; i += 1) {
      const result = [];
      updatedCars.forEach((value, key) => {
        if (this.decideToMoveForward()) {
          updatedCars.set(key, (value += 1));
        }
        result.push(`${key} : ${MESSAGE.result.distance.repeat(value)}\n`);
      });
      Console.print(result.join(''));
    }
    this.cars = updatedCars;
  }

  printFinalWinner() {
    const winners = [];
    const max = Math.max(...this.cars.values());
    this.cars.forEach((value, key) => {
      if (value === max) {
        winners.push(key);
      }
    });
    Console.print(`${MESSAGE.result.finalWinner}${winners.join(', ')}`);
  }
}

const app = new App();
app.play();

export default App;
