import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import CarList from './CarList.js';

class Game {
  #carListArr = [];
  #tryMove = '';

  async init() {
    const carListInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    this.#carListArr = carListInput.split(',');
  }

  async createCars() {
    const carList = new CarList();

    this.#carListArr.forEach((carName) => {
      carList.add(new Car(carName));
    });
  }

  async moveQuestion() {
    this.#tryMove = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }
}

export default Game;
