import { Console } from '@woowacourse/mission-utils';
import Input from './Input.js';
import MESSAGE from './constants/Message.js';
import Car from './Car.js';

class App {
  #times;

  #num;

  constructor() {
    this.#times = 0;
    this.#num = 0;
  }

  async play() {
    const cars = await Input.getCarNames();
    const car = new Car(cars);

    this.#times = await Input.getRepeatTimes();
    Console.print(MESSAGE.result);
    while (this.#num < this.#times) {
      car.moveCar();

      this.#num += 1;
    }

    const max = car.findMaxCount();
    Console.print(`${MESSAGE.winner}${max.join(', ')}`);
  }
}

export default App;
