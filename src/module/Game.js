import { Console } from '@woowacourse/mission-utils';
import Car from './Car.js';
import CarList from './CarList.js';

class Game {
  #carListArr = [];
  #tryMove = '';

  #carList = new CarList();

  getCarGameInfo() {
    return { myCars: this.#carListArr };
  }

  getCarMoveNum() {
    return { moveNum: this.#tryMove };
  }

  getCarList() {
    return { carList: this.#carList };
  }

  async init() {
    const carListInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );
    this.#carListArr = carListInput.split(',');
  }

  async createCars() {
    this.#carListArr.forEach((carName) => {
      this.#carList.add(new Car(carName));
    });
  }

  async moveQuestion() {
    this.#tryMove = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');
  }

  async process() {
    Console.print('\n실행 결과');
    for (let i = 0; i < this.#tryMove; i++) {
      this.#carList.race();
      this.#carList.printCarCurrnetState();
      Console.print('');
    }
  }

  async printWinner() {
    const winner = await this.#carList.setWinner();
    Console.print(`최종 우승자 : ${winner}`);
  }
}

export default Game;
