import { Console, Random } from '@woowacourse/mission-utils';
import Input from './Input.js';

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
    this.#cars.forEach((car) => {
      if (Random.pickNumberInRange(0, 9) >= 4) {
        car.count += 1;
      }
      Console.print(`${car.name} : ${'-'.repeat(car.count)}`);
    });
  }

  findMaxCount() {
    const maxCount = Math.max(...this.#cars.map((car) => car.count));
    const maxCountCars = this.#cars.filter((car) => car.count === maxCount);
    const maxCountCarNames = maxCountCars.map((car) => car.name);
    return maxCountCarNames;
  }

  async play() {
    const names = await Input.getCarNames();
    names.split(',').forEach((element) => {
      if (element.length > 5) {
        throw new Error('[ERROR] 이름은 5자 이하여야 합니다');
      }
      this.#cars.push({ name: element, count: 0 });
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
