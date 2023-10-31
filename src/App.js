import { Console } from '@woowacourse/mission-utils';
import Validation from './modules/Validation.js';
import Print from './modules/Print.js';
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
    this.cars = Print.executeProcess(this.cars, this.numberOfTimes);
    Print.announceWinner(this.cars);
  }
}

export default App;
