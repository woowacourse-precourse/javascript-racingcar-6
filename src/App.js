import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  #carArray;

  #attemptLeft;

  constructor() {
    this.#carArray = [];
    this.#attemptLeft = 0;
  }

  async play() {
    await this.readCar();
    await this.readMaxAttempt();
    Console.print('\n실행 결과');
    this.race();
    // this.printWinner;
  }

  async readCar() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const names = input.split(',');
    names.map((carName) => {
      const car = new Car(carName);
      this.#carArray.push(car);
    });
  }

  async readMaxAttempt() {
    const input = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
    this.#attemptLeft = parseInt(input, 10);
  }

  race() {
    while (this.#attemptLeft > 0) {
      this.#attemptLeft -= 1;
      this.#carArray.map((car) => {
        car.tryMove();
        car.printPosition();
      });
      Console.print('');
    }
  }

  printWinner() {}
}

export default App;
