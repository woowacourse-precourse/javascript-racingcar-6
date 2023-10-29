import { Console } from '@woowacourse/mission-utils';
import Validation from './modules/Validation.js';
import Decision from './modules/Decision.js';
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
    this.numberOfTimes = Validation.getNumberOfTimes(answerOfNumber);
    this.printExecutionResult();
    this.printFinalWinner();
  }

  printExecutionResult() {
    Console.print(MESSAGE.result.execution);
    const updatedCars = new Map([...this.cars]);
    for (let i = 1; i <= this.numberOfTimes; i += 1) {
      const result = [];
      updatedCars.forEach((value, key) => {
        let moveNum = value;
        if (Decision.moveForward()) {
          updatedCars.set(key, (moveNum += 1));
        }
        result.push(`${key} : ${MESSAGE.result.distance.repeat(moveNum)}\n`);
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
