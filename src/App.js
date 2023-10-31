import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';
import ERROR from './constants/Error.js';

class App {
  #cars;

  #times;

  #num;

  constructor() {
    this.#cars = [];
    this.#times = 0;
    this.#num = 0;
  }

  startGoOrStop() {
    const updatedCars = this.#cars.map((car) => {
      const newCar = { ...car };
      if (Random.pickNumberInRange(0, 9) >= 4) {
        newCar.count += 1;
      }
      Console.print(`${newCar.name} : ${'-'.repeat(newCar.count)}`);
      return newCar;
    });

    this.#cars = updatedCars;
  }

  findMaxCount() {
    const maxCount = Math.max(...this.#cars.map((car) => car.count));
    const maxCountCars = this.#cars.filter((car) => car.count === maxCount);
    const maxCountCarNames = maxCountCars.map((car) => car.name);
    return maxCountCarNames;
  }

  async play() {
    const names = await Input.getCarNames();
    names.split(',').forEach((name) => {
      if (name.length > 5 || name.length < 1) {
        throw new Error(ERROR.nameLength);
      }
      this.#cars.push({ name, count: 0 });
    });

    this.#times = await Input.getRepeatTimes();

    while (this.#num < this.#times) {
      Console.print('\n실행 결과');
      this.startGoOrStop();
      this.#num += 1;
    }

    const max = this.findMaxCount();
    Console.print(`\n최종 우승자 : ${max.join(', ')}`);
  }
}

export default App;
