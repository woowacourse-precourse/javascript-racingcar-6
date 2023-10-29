import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';

class App {
  #carArray;

  #winnerCar;

  #attemptLeft;

  constructor() {
    this.#carArray = [];
    this.#winnerCar = [];
    this.#attemptLeft = 0;
  }

  async play() {
    await this.readCar();
    await this.readMaxAttempt();
    Console.print('\n실행 결과');
    this.race();
    this.findWinner();
    this.printWinner();
  }

  async readCar() {
    const input = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    const names = input.split(',');
    names.map((carName) => {
      this.checkName(carName);
      this.#carArray.push(new Car(carName));
    });
  }

  checkName(name) {
    if (name.length > 5)
      throw new Error('[ERROR] 입력된 이름이 5자 이상입니다.');
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

  findWinner() {
    let max = 0;
    this.#carArray.map((car) => {
      const pos = car.getPosition();
      if (max < pos) {
        this.#winnerCar = [car.getName()];
        max = pos;
      } else if (max === pos) this.#winnerCar.push(car.getName());
    });
  }

  printWinner() {
    const winners = this.#winnerCar.join(', ');
    Console.print(`최종 우승자 : ${winners}`);
  }
}

export default App;
