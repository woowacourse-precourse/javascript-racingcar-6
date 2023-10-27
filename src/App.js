import { Console } from '@woowacourse/mission-utils';
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
    this.validateNamesOfCar(answerOfCars);
    const answerOfNumber = await Console.readLineAsync(
      MESSAGE.input.numberOfTimes
    );
    this.validateNumberOfTimes(answerOfNumber);
    return;
  }

  validateNamesOfCar(answer) {
    const info = new Map();
    answer.split(',').forEach((str) => {
      if (str.length === 0 || str.length > CONDITION.carNameLength) {
        throw new Error(MESSAGE.error.carName);
      } else if (CONDITION.notNormalCharacter.test(str)) {
        throw new Error(MESSAGE.error.specialCharacter);
      } else if (info.has(str)) {
        throw new Error(MESSAGE.error.duplicateName);
      } else {
        info.set(str, 0);
      }
    });
    this.cars = info;
  }

  validateNumberOfTimes(answer) {
    const number = Number(answer);
    if (Number.isSafeInteger(number) && number > 0) {
      this.numberOfTimes = number;
    } else {
      throw new Error(MESSAGE.error.numberOfTimes);
    }
  }
}

const app = new App();
app.play();

export default App;
