import { Console } from '@woowacourse/mission-utils';
import MESSAGE from './constants/message.js';

class App {
  #cars = [];
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
    return;
  }
}

const app = new App();
app.play();

export default App;
